import React from 'react';
import '../css/style.css';

const Item = ({ elem, toggleDispatch, ...props }) => {


  return (

    <li className="item">
      <div className="item__left">
        <input
          //checked={props.cheked ? !props.cheked : false}
          className="checkbox"
          type="checkbox"
          onChange={props.toggleItem}
        />
        <span
          className={(props.cheked) ? 'complete text' :'text' }>{elem.text}
        </span>
      </div>
      <button onClick={props.removeItem}></button>
    </li>
  )

}
export default Item;

