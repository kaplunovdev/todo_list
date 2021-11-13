import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App(props) {


  let [items, setItems] = React.useState([

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
    {
      id: 3,
      active: true,
      text: "Покормить кота",
    }

  ])



  return (
    <div className="App" >
      <Title />
      <input className="input_main" type="text" placeholder="Что записать?" autoFocus />
      <List items={props.state} check={props.checked} />
      <Footer />
    </div>
  );

  function checked(id) {
    console.log('Todo' + id)
    setItems(items.map(elem => {
      if (elem.id === id) {
        elem.active = !elem.active
      }
      return elem
    }))

  }

  function List(props) {

    return (
      <ul className="list">
        {items.map((elem) => {

          return <Item elem={elem} key={elem.id} check={props.check} />
        })}
      </ul>
    );

  }
  function Item({ elem, check }) {
    if (elem.active === false) {
    }
    //console.log(items)
    return (
      <li className="item">
        <div className="item__left">
          <input className="checkbox" type="checkbox" onChange={() => checked(elem.id)} />
          <span className="text">{elem.text}</span>
        </div>
        <button></button>
      </li>
    )

  }

}













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


class Title extends React.Component {
  render() {
    return (
      <h1 className="title__main">TODO</h1>
    )
  }
}


ReactDOM.render(
  <React.StrictMode>
    {<App />}
  </React.StrictMode>,
  document.getElementById('root')
);



