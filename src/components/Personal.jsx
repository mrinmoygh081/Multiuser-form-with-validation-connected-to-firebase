import React from 'react'

const Personal = ({ data, setData }) => {
    return (
        <div>
            <div className="form">
                <input
                    type="number"
                    name="age"
                    autoComplete="off"
                    value={data.age}
                    onChange={(event) =>
                        setData({ ...data, age: event.target.value })
                    }
                    required
                />
                <label htmlFor="age" className="label-name">
                    <span className="content-name">Your Age</span>
                </label>
            </div>
            <div className="form">
                <input
                    type="text"
                    name="address"
                    autoComplete="off"
                    value={data.address}
                    onChange={(event) =>
                        setData({ ...data, address: event.target.value })
                    }
                    required
                />
                <label htmlFor="address" className="label-name">
                    <span className="content-name">Your Address</span>
                </label>
            </div>
            <div className="form">
                <input
                    type="text"
                    name="zip"
                    autoComplete="off"
                    value={data.zip}
                    onChange={(event) =>
                        setData({ ...data, zip: event.target.value })
                    }
                    required
                />
                <label htmlFor="zip" className="label-name">
                    <span className="content-name">Zip Code</span>
                </label>
            </div>
        </div>
    )
}

export default Personal