import React from "react";
import { useState } from "react";
import "./List.css";

const List = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((obj) => {
      return [...obj, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input
            id="input"
            value={inputList}
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
          />
          <button onClick={listOfItems}> +</button>

          <ol>
            {Items.map((i) => {
              const deletItems = () => {
                console.log("deleted")
              }
              return (
                <>
                  <div className="todo_style">
                    <i className="fa fa-times" aria-hidden="true" onClick={deletItems}/>
                    <li>{i}</li>
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default List;
