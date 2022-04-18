import React from 'react';


const Signup = ({ data, setData }) => {

    return (
        <div>
            <div className="form">
                <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={data.name}
                    onChange={(event) =>
                        setData({ ...data, name: event.target.value })
                    }
                    required
                />
                <label htmlFor="name" className="label-name">
                    <span className="content-name">Name</span>
                </label>
            </div>
            <div className="form">
                <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    value={data.email}
                    onChange={(event) =>
                        setData({ ...data, email: event.target.value })
                    }
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
                    value={data.password}
                    onChange={(event) =>
                        setData({ ...data, password: event.target.value })
                    }
                    required
                />
                <label htmlFor="password" className="label-name">
                    <span className="content-name">Set Password</span>
                </label>
            </div>
        </div>
    )
}

export default Signup