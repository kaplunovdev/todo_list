import React from 'react';
import Footer from './Footer';
import Title from './Title';
import Item from './Item';
import Input from './Input';
import { store } from '../index';
import '../css/style.css';
import todos from '../redux/rootReducer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import inputValue from './Input'


export class App extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   items: [],
    //   itemsFull: [],
    // }


  }


  // addTodo = (elem) => {

  //   const { items } = this.state;
  //   const itemsFull = [...items];
  //   const arr = itemsFull.map(elem => elem.id)
  //   const idTask = items.length === 0 ? 0 : Math.max.apply(null, arr) + 1;

  //   itemsFull.push({
  //     id: idTask,
  //     active: true,
  //     text: elem
  //   })

  //   this.setState({
  //     items: itemsFull,
  //     itemsFull: itemsFull,
  //   })

  // }


  // completeItem = (id) => {
  //   const { itemsFull } = this.state
  //   itemsFull.map(elem => {
  //     if (elem.id === id) {
  //       const toggle = elem.active = !elem.active;
  //       this.setState(state => {
  //         const { items } = state;
  //         elem.active = toggle;
  //         return items;
  //       })

  //     }

  //   });


  // }

  // deleteItem = (id) => {
  //   const { itemsFull } = this.state
  //   const newItems = itemsFull.filter(task => task.id !== id)

  //   this.setState({
  //     items: newItems,
  //     itemsFull: newItems,
  //   })




  // }

  // deleteAll = () => {
  //   const { itemsFull } = this.state
  //   const update = itemsFull.filter(task => task.active)

  //   this.setState({
  //     items: update,
  //     itemsFull: update
  //   })

  // }

  // deleteActive = () => {
  //   const { itemsFull } = this.state
  //   const update = itemsFull.filter(task => !task.active)

  //   this.setState({
  //     items: update,
  //     itemsFull: update

  //   })
  // }

  // showActive = () => {
  //   const { itemsFull } = this.state
  //   const update = itemsFull.filter(task => task.active)

  //   this.setState({
  //     items: update,
  //   })
  // }

  // showComplete = () => {
  //   const { itemsFull } = this.state
  //   const update = itemsFull.filter(task => !task.active)

  //   this.setState({
  //     items: update
  //   })
  // }

  // showAll = () => {
  //   const { itemsFull } = this.state

  //   this.setState({
  //     items: itemsFull

  //   })
  // }

  toggleClass = (id) => {
    const { fullTasks } = this.state
    fullTasks.map(item => {
      if (item.id === id) {
        item.active = !item.active
      }
      return item;
    })
  }

  inputEnter = (e) => {
    if (e.key === 'Enter') {
      this.addItem();
    }
  }

  addItem = () => {

    console.log('addTrack', this.trackInput.value);
    this.props.addDispatch(this.trackInput.value);
    this.trackInput.value = '';
  }

  removeItem = (index) => {

    this.props.removeDispatch(index);
    console.log()
  }
  toggleItem = (index) => {

    this.props.toggleDispatch(index);
    console.log()
  }



  render() {
    const activeItem = this.props.todoStore.filter(item => !item.isComplete);
    const itemComplete = this.props.todoStore.filter(item => item.isComplete);
    console.log('todoStore', this.props.todoStore)

    return (
      <div className="App" >
        <Title />
        <input
          className="input_main"
          type="text"
          placeholder="Что записать?"
          autoFocus
          onChange={this.changeInput}
          onKeyPress={this.inputEnter}
          ref={(input) => { this.trackInput = input }}
        />

        <ul>
          {this.props.todoStore.map((elem, index) => {
            return (
              <Item
                elem={elem}
                key={index}
                removeItem={() => this.removeItem(index)}
                completeItem={() => this.toggleItem(elem.id)}
                cheked={elem.isComplete}
              />
            )
          })}
        </ul>

        {(this.props.todoStore.length > 0) ?
          <Footer
            //items={items}
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

let nextId = 0
export default connect(
  state => ({
    todoStore: state
  }),

  dispatch => ({

    addDispatch: (todo) => {

      dispatch({
        type: 'ADD_TODOS',
        id: nextId++,
        text: todo,
        isComplete: false
      })
    },
    toggleDispatch: (todo) => {
      dispatch({
        type: 'TOGGLE_TODOS',
        id: todo
      })
    },
    removeDispatch: (index) => {
      dispatch({
        type: 'REMOVE_TODOS',
        payload: index
      })
    }
  })
)(App);

