import React from 'react';
import '../css/style.css';



function Footer(props) {



  return (

    <div className="footer">
      <div>{props.countAll}</div>
      <div className="footer__center">
        <button onClick={() => props.showAll()}
        >Все</button>
        <button onClick={() => props.showActive()}>Активные
        </button>
        <button
          onClick={props.fullTasks.length ? ()=>props.showComplete() : undefined }>Завершенные</button>
      </div>
      <button onClick={() => props.deleteActive()}>Удалить активные</button>
      <button onClick={() => props.deleteAll()}>
        {(props.countDone) ? 'Удалить завершенные (' + props.countDone + ')' : ''}
      </button>
    </div>
  );


}


export default Footer;

