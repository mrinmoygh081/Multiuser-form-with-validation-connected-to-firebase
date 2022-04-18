import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile';


const Form = () => {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    var success = false;
    const checkEmailPw = () => {
        console.log(login);
        success = true;
    }


    return (
        <>
            {success ? <Profile /> : (
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
                                                setLogin({ ...login, email: event.target.value })
                                            }
                                            value={login.email}
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
                                                setLogin({ ...login, password: event.target.value })
                                            }
                                            value={login.password}
                                            required
                                        />
                                        <label htmlFor="password" className="label-name">
                                            <span className="content-name">Set Password</span>
                                        </label>
                                    </div>

                                    <div className="btn_container">
                                        <button type="button" className="btn_style" onClick={() => checkEmailPw()}>LOGIN</button>
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