import React from 'react';
import Footer from './Footer';
import Title from './Title';
import List from './List';
import '../css/style.css';


 function App(props) {

    return (
        <div className="App" >
            <Title />
            <input className="input_main" type="text" placeholder="Что записать?" autoFocus />
            <List items={props.state} check={props.Checked} />
            <Footer />
        </div>
    );



}


 export function Checked(id) {
    console.log('Todo' + id)
    items.map(elem => {
        if (elem.id === id) {
            elem.active = !elem.active
        }
        return elem
    })

}

 export default App;