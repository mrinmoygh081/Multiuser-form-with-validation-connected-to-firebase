import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import Profile from './Profile';

import { auth } from '../firebase';

const Form = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        token: '',
    });
    var user;
    const checkLogin = async () => {
        try {
            user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user._tokenResponse);
            setUserData({
                email: user._tokenResponse.email,
                token: user._tokenResponse.idToken
            })
            setSuccess(true);
            setLoginEmail('');
            setLoginPassword('');
        } catch (err) {
            alert("Wrong Credentials")
            console.log(err.message);
        }
    }


    return (
        <>
            {success ? <Profile credentials={userData} success={success} /> : (
                <div className="container_width">
                    <div className="text-right">
                        <Link to="/" className="btn_style">Signup</Link>
                    </div>

                    <div className="row contact_us_area">
                        <div id="contact_us" className="col-md-6 col-12 contact_us_right">
                            <div className="contact_form">
                                <h3>Login </h3>
                                <p>Login To Your Account</p>
                                <form>
                                    <div className="form">
                                        <input
                                            type="email"
                                            name="email"
                                            autoComplete="off"
                                            onChange={(event) =>
                                                setLoginEmail(event.target.value)
                                            }
                                            value={loginEmail}
                                            required
                                        />
                                        <label htmlFor="email" className="label-name">
                                            <span className="content-name">Email</span>
                                        </label>
                                    </div>
                                    <div className="form">
                                        <input
                                            type="text"
                                            name="password"
                                            autoComplete="off"
                                            onChange={(event) =>
                                                setLoginPassword(event.target.value)
                                            }
                                            value={loginPassword}
                                            required
                                        />
                                        <label htmlFor="password" className="label-name">
                                            <span className="content-name">Set Password</span>
                                        </label>
                                    </div>

                                    <div className="btn_container">
                                        <button type="button" className="btn_style" onClick={() => checkLogin()}>LOGIN</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Form;