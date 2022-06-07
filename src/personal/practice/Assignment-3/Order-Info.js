import React from 'react';
import "./Profile-Layout.css";
const OrderInfo = () => {
  return (
    <div className="Order-Info">
      <div>
        <span>
          <b>Status</b>
        </span>
        <br />
        <br />
        <span>
          <ul>
            <li>In Progress</li>
          </ul>
        </span>
      </div>
      <div>
        <span>
          <b>Door</b>
        </span>
        <br />
        <br />
        <span>Mark</span>
      </div>
      <div>
        <span>
          <b>Time</b>
        </span>
        <br />
        <br />
        <span>
          10:00 <span id="date">(07-06-2022)</span>
        </span>
      </div>
    </div>
  );
};

export default OrderInfo;
