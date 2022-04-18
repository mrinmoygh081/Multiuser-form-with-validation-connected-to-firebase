import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { getAuth } from "firebase/auth";
// import { database } from '../firebase'


import Login from './Login';
// import { db } from '../firebase';

const Profile = ({ credentials, success }) => {
    const [userInfo, setUserInfo] = useState([]);


    useEffect(() => {
        const getUserData = async () => {
            const config = {
                headers: {
                    'Accept': 'application/json'
                }
            }
            const res = await fetch(`https://practice-5c656-default-rtdb.firebaseio.com/userDatas.json?auth=${credentials.token}`, config);
            const result = await res.json();
            console.log(result);
        }
        getUserData();

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                console.log(uid);
                setUserInfo(user.email)
            } else {
                console.log("rerror")
            }
        });

        console.log(userInfo);
    }, []);

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
                                    <tbody>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <td>Mrinmoy Ghosh</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>m@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Age</th>
                                            <td>26</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td>Milki</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ZIP Code</th>
                                            <td>732211</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">LinkedIn</th>
                                            <td>@linkedin</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Instagram</th>
                                            <td>@insta</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dribble</th>
                                            <td>@dribble</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>) : <Login />}
        </div>
    )
}

export default Profile;