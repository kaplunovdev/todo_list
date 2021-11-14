import React from 'react';
import Item from './Item';
import '../css/style.css';


let items = [

    {
        id: 1,
        active: true,
        text: "Купить молока",
    },
    {
        id: 2,
        active: true,
        text: "Заказать шавуху",
    },


]

function List(props) {

    return (
      <ul className="list">
        {items.map((elem) => {
  
          return <Item elem={elem} key={elem.id} check={props.check} />
        })}
      </ul>
    );
  
  }
  export default List;