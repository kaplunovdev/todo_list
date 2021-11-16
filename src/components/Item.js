import React from 'react';
import '../css/style.css';

const Item = ({ elem, ...props }) => {

 


  return (
    <li className="item">
      <div className="item__left">
        <input className="checkbox" type="checkbox" />
        <span className={(elem.active === false) ? 'complete text' : 'text'}>{elem.text}</span>
      </div>
      <button onClick={() => props.deleteItem(elem.id)}></button>
    </li>
  )

}
export default Item;

