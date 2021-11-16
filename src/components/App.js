import React from 'react';
import Footer from './Footer';
import Title from './Title';
// import List from './List';
import Item from './Item';
import '../css/style.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [

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

            ]
        }

    }





    // toggleElem = (id) => {
    //     console.log('Todo' + id)
    //     this.items.map(elem => {
    //         if (elem.id === id) {
    //             elem.active = !elem.active
    //         }
    //         return elem
    //     })


    // }

    // removeElem = (id) => {
    //     const updateItems = this.state.items.filter(item => item.id !== id)
    //     this.setState({ items: updateItems })
    // }

    // activeElemCount() {
    //     return this.items.filter(elem => !elem.active).length
    // }
    // setItems() {

    // }

    completeItem = (id) => {
        const indexElem = this.state.items.map(elem => elem.id).indexOf(id);
        this.setState(state => {
            let { items } = state;
            items[indexElem].active = false;
            return items;
        })


    }

    deleteItem = id => {
        const indexElem = this.state.items.map(elem => elem.id).indexOf(id);

        //let newItems = items.filter(task => task.id !== id)

        this.setState(state => {
            let { items } = state;
            delete items[indexElem]
            return items
        }

        )

    }


    render() {

        const { items } = this.state
        const activeItem = items.filter(item => !item.active);
        const itemComplete = items.filter(item => item.active);

        return (
            <div className="App" >
                <Title />
                <input className="input_main" type="text" placeholder="Что записать?" autoFocus />
                <ul>
                    {items.map(elem => {
                        return (
                            <Item
                                elem={elem}
                                key={elem.id}
                                deleteItem={() => this.deleteItem(elem.id)}
                            />
                        )
                    })}
                </ul>

                <Footer items={items}

                />
            </div>
        )
    }


}



export default App;