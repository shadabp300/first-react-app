import React from 'react';
import { UserData } from './Profile-Layout';
import "./Profile-Layout.css";
const CustomerInfo = () => {
  return (
    <div className="Custromer-Info">
      <span>
        <b>Appointment :</b> {UserData.Appointment}
      </span>
      <br />
      <span>
        <b>Email :</b> {UserData.Email}
      </span>
      <br />
      <span>
        <b>Phone :</b> {UserData.Phone}
      </span>
    </div>
  );
};
export default CustomerInfo;
