import React from 'react';
import "./Profile-Layout.css";

const Header = (props) => {
  return (
    <div className="header">
      <span id="name">{props.Data.Name}</span>
      <button id="print">Print</button>
      <br />
      <span id="id">{props.Data.EmployeeId}</span>
    </div>
  );
};
export default Header;
