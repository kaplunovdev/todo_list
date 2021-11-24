import React from 'react';
import '../css/style.css';



function Footer(props) {

  return (

    <div className="footer">
      <div>{props.activeCount}</div>
      <div className="footer__center">
        <button onClick={props.showAll} >Все</button>
        <button
          onClick={props.showActive}
          disabled={false}>Активные</button>
        <button
          onClick={props.showComplete}
          disabled={false}>Завершенные
        </button>
      </div>
      {(props.countAll) ?
        <button onClick={props.removeActive}>Удалить активные</button> : false}
      <button className="remove" onClick={props.removeComplete}>
        {(props.itemComplete) ? 'Удалить завершенные (' + props.itemComplete + ')' : ''}
      </button>
    </div>
  );


}


export default Footer;

