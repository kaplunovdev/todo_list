import React from 'react';
import Footer from './Footer';
import Title from './Title';
import Item from './Item';
import Input from './Input';
import '../css/style.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            itemsFull: [],
        }


    }

    addTodo = (elem) => {

        const { items } = this.state;
        const itemsFull = [...items];
        const arr = itemsFull.map(elem => elem.id)
        const idTask = items.length === 0 ? 0 : Math.max.apply(null, arr) + 1;

        itemsFull.push({
            id: idTask,
            active: true,
            text: elem
        })

        this.setState({
            items: itemsFull,
            itemsFull: itemsFull,
        })
    }

    completeItem = (id) => {
        const { itemsFull } = this.state
        itemsFull.map(elem => {
            if (elem.id === id) {
                const toggle = elem.active = !elem.active;
                this.setState(state => {
                    const { items } = state;
                    elem.active = toggle;
                    return items;
                })

            }

        });


    }

    deleteItem = (id) => {
        const { itemsFull } = this.state
        const newItems = itemsFull.filter(task => task.id !== id)

        this.setState({
            items: newItems,
            itemsFull: newItems,
        })




    }

    deleteAll = () => {
        const { itemsFull } = this.state
        const update = itemsFull.filter(task => task.active)

        this.setState({
            items: update,
            itemsFull: update
        })

    }

    deleteActive = () => {
        const { itemsFull } = this.state
        const update = itemsFull.filter(task => !task.active)

        this.setState({
            items: update,
            itemsFull: update

        })
    }

    showActive = () => {
        const { itemsFull } = this.state
        const update = itemsFull.filter(task => task.active)

        this.setState({
            items: update,
        })
    }

    showComplete = () => {
        const { itemsFull } = this.state
        const update = itemsFull.filter(task => !task.active)

        this.setState({
            items: update
        })
    }

    showAll = () => {
        const { itemsFull } = this.state

        this.setState({
            items: itemsFull

        })
    }

    toggleClass = (id) => {
        const { fullTasks } = this.state
        fullTasks.map(item => {
            if (item.id === id) {
                item.active = !item.active
            }
            return item;
        })
    }




    render() {
        const { itemsFull } = this.state;
        const { items } = this.state;
        const activeItem = itemsFull.filter(item => item.active);
        const itemComplete = itemsFull.filter(item => !item.active);

        return (
            <div className="App" >
                <Title />
                <Input addTodo={this.addTodo} />
                <ul>
                    {items.map((elem, index) => {
                        return (
                            <Item
                                elem={elem}
                                key={index}
                                deleteItem={() => this.deleteItem(elem.id)}
                                completeItem={() => this.completeItem(elem.id)}
                            />
                        )
                    })}
                </ul>

                {(this.state.itemsFull.length > 0) ?
                    <Footer
                        items={items}
                        countAll={activeItem.length}
                        showComplete={this.showComplete}
                        countDone={itemComplete.length}
                        deleteAll={this.deleteAll}
                        showActive={this.showActive}
                        deleteActive={this.deleteActive}
                        showAll={this.showAll}
                    /> : ''
                }


            </div>
        )
    }

}



export default App;