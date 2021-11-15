import React from 'react';
import '../css/style.css';
import removeItem from './List'

const Item = ({ elem, elemChange }) => {

  return (
    <li className="item">
      <div className="item__left">
        <input className="checkbox" type="checkbox" onChange={() => elemChange(elem.id)} />
        <span className={(elem.active === false) ? 'complete text' : 'text'}>{elem.text}</span>
      </div>
      <ButtonRemove idRemove={elem.id} />
    </li>
  )

}
export default Item;




export function ButtonRemove(props) {

  return (
    <button onClick={()=>removeItem(props.idRemove)}></button>
  )
}