import React from 'react';
import "./Profile-Layout.css";
const CustomerInfo = (props) => {
  return (
    <div className="Custromer-Info">
      <span>
        <b>Appointment :</b> {props.Data.Appointment}
      </span>
      <br />
      <span>
        <b>Email :</b> {props.Data.Email}
      </span>
      <br />
      <span>
        <b>Phone :</b> {props.Data.Phone}
      </span>
    </div>
  );
};
export default CustomerInfo;
