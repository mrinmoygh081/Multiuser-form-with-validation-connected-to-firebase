import React from 'react'

const Other = ({ data, setData }) => {
    return (
        <div>
            <div className="form">
                <input
                    type="text"
                    name="linkedIn"
                    autoComplete="off"
                    value={data.linkedIn}
                    onChange={(event) =>
                        setData({ ...data, linkedIn: event.target.value })
                    }
                    required
                />
                <label htmlFor="linkedIn" className="label-name">
                    <span className="content-name">Your LinkedIn ID</span>
                </label>
            </div>
            <div className="form">
                <input
                    type="text"
                    name="instagram"
                    autoComplete="off"
                    value={data.instagram}
                    onChange={(event) =>
                        setData({ ...data, instagram: event.target.value })
                    }
                    required
                />
                <label htmlFor="instagram" className="label-name">
                    <span className="content-name">Instagram ID </span>
                </label>
            </div>
            <div className="form">
                <input
                    type="text"
                    name="dribble"
                    autoComplete="off"
                    value={data.dribble}
                    onChange={(event) =>
                        setData({ ...data, dribble: event.target.value })
                    }
                    required
                />
                <label htmlFor="dribble" className="label-name">
                    <span className="content-name">Your Dribble ID </span>
                </label>
            </div>
        </div>
    )
}

export default Other