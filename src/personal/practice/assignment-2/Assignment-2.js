import React from "react";
import "./Assignment-2.css"

const employee = {
    name: 'Tom',
    location: 'New York',
    bloodGroup: 'B+',
    age: 28,
    profileImg: 'https://www.w3schools.com/howto/img_avatar.png'
    }
    
    const Profile=() => {
        return (
            <div className="container">
            <img alt="ProfileImage" src={employee.profileImg}/>
            <div className="Information">
            <h1>{employee.name}</h1>
            <p>Location :</p>
            <h3>{employee.location}</h3>
            <p>Blood Group :</p>
            <h3>{employee.bloodGroup}</h3>
            <p>Age :</p>
            <h3>{employee.age}</h3>
            </div>
            </div>
        )
    }
    export default Profile