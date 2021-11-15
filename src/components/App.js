import React from 'react';
import Footer from './Footer';
import Title from './Title';
import List from './List';
import '../css/style.css';


function App() {

    const [items, setItems] = React.useState([

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
            text: "Заказать шавуху",
        },
    ])

    function removeItem(id, props) {
        console.log(id)
        setItems(props.items.filter(item =>   item.id !== id ))
       
      }

    return (
        <div className="App" >
            <Title />
            <input className="input_main" type="text" placeholder="Что записать?" autoFocus />
            <List items={items} elemToggle={toggleElem} />
            <Footer items={items} />
        </div>
    );


    function toggleElem(id) {
        console.log('Todo' + id)
        setItems(items.map(elem => {
            if (elem.id === id) {
                elem.active = !elem.active
            }
            return elem
        }))


    }


}



export default App;