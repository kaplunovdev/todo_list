import React from 'react';
import '../css/style.css';

const Item = ({ elem, ...props }) => {


  return (

    <li className="item">
      <div className="item__left">
        <input
          checked={!props.cheked ? false : true}
          className="checkbox"
          type="checkbox"
          onChange={props.toggleItem}
        />
        <span
          className={!props.cheked ?  'text':'complete text' }>{elem.text}
        </span>
      </div>
      <button onClick={props.removeItem}></button>
    </li>
  )

}
export default Item;

