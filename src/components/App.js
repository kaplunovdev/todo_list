import React from 'react';
import Footer from './Footer';
import Title from './Title';
// import List from './List';
import Item from './Item';
import Input from './Input';
import '../css/style.css';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            fullTasks: []
        }


        this.deleteItem = this.deleteItem.bind(this);
        this.deleteAll = this.deleteAll.bind(this);
        this.showAll = this.showAll.bind(this);
        this.showActive = this.showActive.bind(this);
    }

    addTodo = (elem) => {

        this.setState(state => {
            let { items } = state;

            items.push({
                id: items.length !== 0 ? items.length : 0,
                active: true,
                text: elem
            });

            this.state.fullTasks.push({
                id: items.length !== 0 ? items.length : 0,
                active: true,
                text: elem
            })


            return items;
        })


    }
    completeItem = (id) => {
        const elemDone = this.state.items.map(elem => elem.id).indexOf(id);
        this.setState(state => {
            let { items } = state;
            items[elemDone].active = !items[elemDone].active;
            return items;
        })
        this.setState(state => {
            let { fullTasks } = state;
            fullTasks[elemDone].active = !fullTasks[elemDone].active;
            return fullTasks;
        })
   


    }

    deleteItem(id) {
        let newItems = this.state.items.filter(task => task.id !== id)

        this.setState({
            items: newItems
        })
        this.setState({
            fullTasks: newItems
        })
    }

    deleteAll() {
        let { items } = this.state
        let newItems = items.filter(task => task.active)

        this.setState({
            items: newItems
        })
        this.setState({
            fullTasks: newItems
        })
    }

    deleteActive() {
        let { items } = this.state
        let newItems = items.filter(task => !task.active)

        this.setState({
            items: newItems
        })
    }

    showActive() {
        let { fullTasks } = this.state
        let active = fullTasks.filter(task => task.active)

        this.setState({
            items: active,
        })
        //return active
    }

    showComplete() {
        let { fullTasks } = this.state
        let update = fullTasks.filter(task => !task.active)

        this.setState({
            items: update
        })
    }

    showAll() {
        this.setState({
            items: this.state.fullTasks,
        })
    }


    render() {
        const { items } = this.state;
        const activeItem = items.filter(item => item.active);
        const itemComplete = items.filter(item => !item.active);
        return (
            <div className="App" >
                <Title />
                <Input addTodo={this.addTodo} />
                <ul>
                    {items.map((elem) => {
                        return (
                            <Item
                                elem={elem}
                                key={elem.id}
                                deleteItem={() => this.deleteItem(elem.id)}
                                completeItem={() => this.completeItem(elem.id)}
                            />
                        )
                    })}
                </ul>

                {(this.state.fullTasks.length) ?
                    <Footer
                        items={items}
                        fullTasks={this.state.fullTasks}
                        countAll={activeItem.length}
                        showComplete={() => this.showComplete()}
                        countDone={itemComplete.length}
                        deleteAll={() => this.deleteAll()}
                        showActive={() => this.showActive()}
                        deleteActive={() => this.deleteActive()}
                        showAll={() => this.showAll()}
                    /> : ''
                }


            </div>
        )
    }


}



export default App;