import React from 'react';
import Item from './Item';
import '../css/style.css';







function List(props) {




  return (
    <ul className="list">
      {props.items.map(elem => {

        return <Item elem={elem} key={elem.id} elemChange={props.elemToggle} />
      })}
    </ul>
  );

}
export default List;