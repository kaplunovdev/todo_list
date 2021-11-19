import React from 'react';
import '../css/style.css';

const Item = ({ elem, ...props }) => {


  return (
    <li className="item">
      <div className="item__left">
        <input
          checked={!elem.active}
          className="checkbox"
          type="checkbox"
          onChange={() => props.completeItem(elem.id)} />
        <span
          className={(!elem.active) ? 'complete text' : 'text'}>{elem.text}</span>
      </div>
      <button onClick={() => props.deleteItem(elem.id)}></button>
    </li>
  )

}
export default Item;

