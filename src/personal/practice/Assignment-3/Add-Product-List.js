import React from 'react';
import { UserData } from './Profile-Layout';
import "./Profile-Layout.css";
const AddProiductList= () => {
    return (
        <div className="Add-Product-List">
          <div className="list">
          <img alt="Symbol" id="symbol" src="https://th.bing.com/th/id/R.ab7d9d9f4160fa230234ee7d66c9b552?rik=eY2vzdGJsc7lqg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-square-shape-square-geometric-shape-icon-017868-420.png&ehk=PE%2fw4qD18kAEAwAROpWZXOn5h7h9SUwI6s3BVrjZyPk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"/>
          <img alt="ProfileImage" src={UserData.ProfileImage}/>
          </div>
          <div>
          <span id="product-name"><b>{UserData.product_name}</b></span><br/>
          <span>{UserData.Product_description}</span> </div>
      </div>
    );
}
export default AddProiductList;