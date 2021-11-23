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
          onChange={()=> props.completeItem(elem.id)}
        />
        <span
          className={(!props.cheked) ? 'text' :'complete text' }>{elem.text}
        </span>
      </div>
      <button onClick={props.removeItem}></button>
    </li>
  )

}
export default Item;

