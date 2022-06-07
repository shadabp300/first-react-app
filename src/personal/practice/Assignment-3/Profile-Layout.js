import React from "react";
import "./Profile-Layout.css";

import Header from "./Header";
import CustomerInfo from "./Custromer-Info";
import OrderInfo from "./Order-Info";
import AddProiductList from "./Add-Product-List";

export const UserData = {
    Name: "Shadab Pathan",
    EmployeeId: "786786786",
    Appointment: "9:00 (07-06-2022)",
    Email: "shadabp300@.com",
    Phone: "+31123456789",
    ProfileImage:
      "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg",
    product_name: "Boltart Bosbessen",
    Product_description:
      "This is some random description and the product mentioned above.",
  };

const Project = () => {

  return (
    <>
      <Header />
      <CustomerInfo />
      <OrderInfo />
      <AddProiductList />
    </>
  );
};
export default Project;
