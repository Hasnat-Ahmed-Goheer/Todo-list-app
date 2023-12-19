import React from "react";
import Item from "../Item/Item";

import "./ItemList.css";
const ItemList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((item) => (
        <Item key = {item.id}  id = {item.id} onDelete ={props.onDelete} >
        {item.text}
        </Item>
      ))}
    </ul>
  );
};

export default ItemList;
