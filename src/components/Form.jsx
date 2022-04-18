import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase';
import Signup from './Signup';
import Personal from './Personal';
import Other from './Other';
import { Link } from 'react-router-dom';

const Form = () => {

    const [page, setPage] = useState(0);
    const [error, setError] = useState(false);
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        address: '',
        zip: '',
        linkedIn: '',
        instagram: '',
        dribble: ''
    });

    const FormTitles = ['Account Set Up', 'Your Personal Info', 'Other Info'];
    const FormSubTitles = ['Set up your account with your email and phone', 'Tell us your personal info', 'Your Social Profile Info'];



    // Form Position
    const PageDisplay = () => {
        if (page === 0) {
            return <Signup data={data} setData={setData} />
        } else if (page === 1) {
            return <Personal data={data} setData={setData} />
        } else if (page === 2) {
            return <Other data={data} setData={setData} />
        }
    }

    // Connect With Firebase
    const submitData = async () => {
        const { name, email, password, age, address, zip, linkedIn, instagram, dribble } = data;

        if (
            name.trim() === '' ||
            email.trim() === '' ||
            password.trim() === '' ||
            age.trim() === '' ||
            address.trim() === '' ||
            linkedIn.trim() === '' ||
            instagram.trim() === '' ||
            dribble.trim() === ''
        ) {
            setError(true);
        } else {

            try {
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
                alert("Account Setup Successfully")
            } catch (err) {
                console.log(err.message);
            }
            const res = await fetch(
                "https://practice-5c656-default-rtdb.firebaseio.com/userDatas.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name, email, age, address, zip, linkedIn, instagram, dribble
                    })
                }
            );

            if (res) {
                alert("Data Stored to Firebase");
            } else {
                alert("Please fill the data")
            }
        }

    }

    return (
        <div className="container_width">
            <div className="text-right">
                <Link to="/login" className="btn_style">Login</Link>
            </div>
            <div className="row contact_us_area">
                <div id="contact_us" className="col-md-6 col-12 contact_us_right">
                    <div className="contact_form">
                        <div className="progressBar">
                            <div className="progressStatus" style={{ "width": `${Math.round(((page + 1) / 3) * 100)}%` }}></div>
                        </div>
                        <h3>{FormTitles[page]}</h3>
                        <p>{FormSubTitles[page]}</p>
                        {error ? <p className="alert">Please fill up all fields </p> : ""}
                        <form>

                            {PageDisplay()}

                            <div className="btn_container">
                                <button
                                    type="button"
                                    className="btn_style"
                                    disabled={page === 0}
                                    onClick={() => {
                                        setPage((curPage) => curPage - 1)
                                    }}
                                >PREV STEP</button>
                                <button
                                    type="button"
                                    className="btn_style"
                                    onClick={() => {
                                        if (page === FormTitles.length - 1) {
                                            console.log(data);
                                            submitData()
                                        } else {
                                            setPage((curPage) => curPage + 1)
                                        }
                                    }}
                                >
                                    {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT STEP"} </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;