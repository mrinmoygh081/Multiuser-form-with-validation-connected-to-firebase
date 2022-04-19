import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
// import { getAuth } from "firebase/auth";
// import firebase from '../firebase'


import Login from './Login';


const Profile = ({ loginEmail, credentials, success }) => {

    const [resArr, setResArr] = useState([]);


    useEffect(() => {
        const getUserData = async () => {
            const config = {
                headers: {
                    'Accept': 'application/json'
                }
            }
            const res = await fetch(`https://practice-5c656-default-rtdb.firebaseio.com/userDatas.json?auth=${credentials.token}`, config);
            const result = await res.json();

            const arr = [];
            const newArr = [];
            for (const resul in result) {
                arr.push(resul);
                // console.log(`${result[resul]}`);
            }

            arr.map((i) => {
                // setResArr([...resArr, result[i]])
                newArr.push(result[i])
            })
            setResArr(newArr);
        }
        getUserData();

        console.log(resArr);

    }, []);

    const userInfo = resArr.map((item) => {
        if (loginEmail == item.email) {
            return (
                <tbody>
                    <tr>
                        <th scope="row">Name</th>
                        <td>{item.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Email</th>
                        <td>{item.email}</td>
                    </tr>
                    <tr>
                        <th scope="row">Age</th>
                        <td>{item.age}</td>
                    </tr>
                    <tr>
                        <th scope="row">Address</th>
                        <td>{item.address}</td>
                    </tr>
                    <tr>
                        <th scope="row">ZIP Code</th>
                        <td>{item.zip}</td>
                    </tr>
                    <tr>
                        <th scope="row">LinkedIn</th>
                        <td>{item.linkedIn}</td>
                    </tr>
                    <tr>
                        <th scope="row">Instagram</th>
                        <td>{item.instagram}</td>
                    </tr>
                    <tr>
                        <th scope="row">Dribble</th>
                        <td>{item.dribble}</td>
                    </tr>
                </tbody>
            )
        }
    })
    return (
        <div>
            {success ? (
                <div className="container_width">
                    <div className="text-right">
                        <Link to="/" className="btn_style">Signup</Link>
                    </div>

                    <div className="row contact_us_area">
                        <div id="contact_us" className="col-md-6 col-12 contact_us_right">
                            <div className="contact_form">
                                <h3>User Dummy Profile Dasboard</h3>
                                <table className="table">
                                    {userInfo}
                                </table>

                            </div>
                        </div>
                    </div>
                </div>) : <Login />}
        </div>
    )
}

export default Profile;