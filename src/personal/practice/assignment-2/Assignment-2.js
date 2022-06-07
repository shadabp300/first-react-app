import React from "react";
import Comp from "./component-";
import "./Assignment-2.css"


const employee = {
  name: "Tom",
  location: "New York",
  bloodGroup: "B+",
  age: 28,
  profileImg: "https://www.w3schools.com/howto/img_avatar.png",
};

const Profile = () => {
  return <Comp employee={employee} />;
};
export default Profile;
