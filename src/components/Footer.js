import React from 'react';
import '../css/style.css';



function Footer(props) {

  return (

    <div className="footer">
      <div>{props.countAll}</div>
      <div className="footer__center">
        <button onClick={() => props.showAll()} >Все</button>
        <button onClick={props.countAll ?  () => props.showActive() :undefined}>Активные  </button>
        <button
          onClick={(props.countDone) ?
           () => props.showComplete() : undefined}>Завершенные
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

