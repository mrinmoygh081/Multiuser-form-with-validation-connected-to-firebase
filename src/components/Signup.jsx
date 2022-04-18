import React from 'react';


const Signup = ({ data, setData, register, errors }) => {

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
                    {...register('nname', { required: true })}
                />
                <label htmlFor="name" className="label-name">
                    <span className="content-name">Name</span>
                </label>
            </div>
            {errors.nname && <p>Please Fill Up Your Name</p>}
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
                    {...register('email', { required: true })}
                />
                <label htmlFor="email" className="label-name">
                    <span className="content-name">Email</span>
                </label>
            </div>
            {errors.email && <p>Please Fill Up Your Name</p>}
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
                    {...register('password', { required: true })}
                />
                <label htmlFor="password" className="label-name">
                    <span className="content-name">Set Password</span>
                </label>
            </div>
            {errors.password && <p>Please Fill Up Your Name</p>}
        </div>
    )
}

export default Signup