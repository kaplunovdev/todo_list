import React from 'react';
import '../css/style.css';



function Footer(props) {

  return (

    <div className="footer">
      <div>{props.countAll}</div>
      <div className="footer__center">
        <button onClick={props.showAll} >Все</button>
        <button
          onClick={props.showActive}
          disabled={props.countAll === 0 ? true : false}>Активные</button>
        <button
          onClick={props.showComplete}
          disabled={props.countDone === 0 ? true : false}>Завершенные
        </button>
      </div>
      {(props.countAll) ? <button onClick={() => props.deleteActive()}>Удалить активные</button> : false}
      <button onClick={() => props.deleteAll()}>
        {(props.countDone) ? 'Удалить завершенные (' + props.countDone + ')' : ''}
      </button>
    </div>
  );


}


export default Footer;

