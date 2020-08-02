import React from 'react'
import axios from 'axios';

export default function Upload(props) {

    const [profileImg, setProfileImg] = React.useState("");

    const onFileChange = (e) => {
        setProfileImg(e.target.files[0])
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('profileImg', profileImg)
        axios.post("http://localhost:4000/api/user-profile", formData, {
        }).then(res => {
            console.log(res)
        })
    }

    return (
        <div className="container">
                <div className="row">
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input type="file" onChange={onFileChange} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}
