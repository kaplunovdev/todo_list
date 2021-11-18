import React from 'react';
import { useSelector } from "react-redux";
import Footer from './Footer';
import Title from './Title';
import Item from './Item';
import Input from './Input';
import '../css/style.css';

//const elem = useSelector(state => state);

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
            const { items } = state;
            const { fullTasks } = state;
            const idTask = items.length !== 0 ? items.length : 0;

            //const maxKey = Math.max(maxId)
            items.push({
                id: idTask,
                active: true,
                text: elem
            });


            fullTasks.push({
                id: idTask,
                active: true,
                text: elem
            })

            return items;

        })


    }

     todoAddStore = () => {
        dispatch(actions.addTask({
          title: 'taskTitle'
        }));
        setTaskTitle('');
      }

    completeItem = (id) => {
        const { items } = this.state
        items.map(elem => {
            if (elem.id === id) {
                const toggle = elem.active = !elem.active;
                this.setState(state => {
                    const { items } = state;
                    elem.active = toggle;
                    return items;
                })

            }

        });


        this.setState({
            fullTasks: items
        })


    }

    deleteItem(id) {
        const newItems = this.state.items.filter(task => task.id !== id)

        this.setState({
            items: newItems,
            fullTasks: newItems,

        })
        const { items } = this.state
        const maxId = items.map(elem => elem.id)
        console.log(maxId)
    }

    deleteAll() {
        const { fullTasks } = this.state
        const update = fullTasks.filter(task => task.active)

        this.setState({
            items: update,
            fullTasks: update
        })

    }

    deleteActive() {
        const { fullTasks } = this.state
        const newItems = fullTasks.filter(task => !task.active)

        this.setState({
            items: newItems,
            fullTasks: newItems
        })
    }

    showActive() {
        const { fullTasks } = this.state
        const active = fullTasks.filter(task => task.active)

        this.setState({
            items: active,
        })
        //return active
    }

    showComplete() {
        const { fullTasks } = this.state
        const update = fullTasks.filter(task => !task.active)

        this.setState({
            items: update

        })
    }

    showAll() {
        const { fullTasks } = this.state
        this.setState({
            items: fullTasks
        })
    }

    toggleClass(id) {
        const { fullTasks } = this.state
        fullTasks.map(item => {
            if (item.id === id) {
                item.active = !item.active
            }
            return item;
        })
    }


    render() {
        const { items } = this.state;
        const { fullTasks } = this.state;
        const activeItem = fullTasks.filter(item => item.active);
        const itemComplete = fullTasks.filter(item => !item.active);

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

                {(this.state.fullTasks.length || this.state.items.length) ?
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