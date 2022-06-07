import React from 'react';
import { UserData } from './Profile-Layout';
import "./Profile-Layout.css";

const Header = () => {
  return (
    <div className="header">
      <span id="name">{UserData.Name}</span>
      <button id="print">Print</button>
      <br />
      <span id="id">{UserData.EmployeeId}</span>
    </div>
  );
};
export default Header;
