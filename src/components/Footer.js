import React from 'react';
import '../css/style.css';



function Footer(props) {

  return (

    <div className="footer">
      <div>{props.activeCount}</div>
      <div className="footer__center">
        <button onClick={props.activeCount || props.showComplete !== 0 ? props.showAll : false}  >Все</button>
        <button
          onClick={props.showActive} 
          disabled={props.activeCount ? false : true}
        >Активные</button>
        <button
          onClick={props.showComplete}
           disabled={props.itemComplete ? false : true}
        >Завершенные
        </button>
      </div>
      {(props.countAll) ?
        <button onClick={props.removeActive} 
        disabled={props.activeCount ? false : true}>Удалить активные</button> : false}
      <button className="remove" onClick={props.removeComplete}>
        {(props.itemComplete) ? 'Удалить завершенные (' + props.itemComplete + ')' : ''}
      </button>
    </div>
  );


}


export default Footer;

