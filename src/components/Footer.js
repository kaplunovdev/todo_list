import React from 'react';
import '../css/style.css';



 class Footer extends React.Component {
    render() {
      return (
        <div className="footer">
          <div>5 задач</div>
          <div className="footer__center">
            <button className="footer__active">Все</button>
            <button>Активные</button>
            <button>Завершены</button>
          </div>
          <button>Удалить завершенные</button>
        </div>
      );
    }
  }


  export default Footer;

 