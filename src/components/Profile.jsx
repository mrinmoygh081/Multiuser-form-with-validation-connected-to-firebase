import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';
// import { db } from '../firebase';

const Profile = ({ credentials, success }) => {
    // const [user, setUser] = useState([]);

    useEffect(() => {
        const getUserData = async () => {
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${credentials.token}`,
            //     }
            // }
            const res = await fetch(`https://practice-5c656-default-rtdb.firebaseio.com/userDatas.json?auth=${credentials.token}`);
            console.log(res);
        }
        getUserData();
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
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Email</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Age</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Address</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">ZIP Code</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">LinkedIn</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Instagram</th>
                                            <td>Mark</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Dribble</th>
                                            <td>Mark</td>
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