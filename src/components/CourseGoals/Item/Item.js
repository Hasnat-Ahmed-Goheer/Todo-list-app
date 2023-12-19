import React from "react";

import './Item.css'

const Item = (props) => {
    const onClickDeleteHandler = () => {
        props.onDelete(props.id);
    }

    return <li className="goal-item" onClick={onClickDeleteHandler}>
       {props.children}
    </li>
}

export default Item;