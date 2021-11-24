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

  // toggleClass = (id) => {
  //   const { fullTasks } = this.state
  //   fullTasks.map(item => {
  //     if (item.id === id) {
  //       item.active = !item.active
  //     }
  //     return item;
  //   })
  // }

  inputEnter = (e) => {
    if (e.key === 'Enter') {
      this.addItem();
    }
  }

  addItem = () => {
    if (this.trackInput.value !== '') {
      this.props.addDispatch(this.trackInput.value);
      this.trackInput.value = '';
    }

  }

  removeItem = (index) => {

    this.props.removeDispatch(index);
  }

  toggleItem = (index) => {

    this.props.toggleDispatch(index);

  }

  showActive = (id) => {

    this.props.activeDispatch(id);
  }

  showAll = (id) => {

    this.props.showAllDispatch(id);
  }

  showComplete = (id) => {

    this.props.showCompleteDispatch(id);
  }
  removeComplete = (id) => {

    this.props.removeCompleteDispatch(id);
  }

  removeActive = (id) => {

    this.props.removeActiveDispatch(id);
  }
  render() {
    const activeItem = this.props.todoStore.items.filter(item => item.isComplete === false);
    const itemComplete = this.props.todoStore.items.filter(item => item.isComplete === true);
    console.log('items', this.props.todoStore.items)
    console.log('filteredItems', this.props.todoStore.filteredItems)
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
          {this.props.todoStore.items.map((elem, index) => {
            return (
              <Item
                elem={elem}
                key={index}
                removeItem={() => this.removeItem(elem.id)}
                toggleItem={() => this.toggleItem(elem.id)}
                cheked={elem.isComplete}
              />
            )
          })}
        </ul>

        {(this.props.todoStore.items.length > 0) ?
          <Footer
            countAll={this.props.todoStore.items.length}
            showComplete={this.showComplete}
            itemComplete={itemComplete.length}
            removeComplete={this.removeComplete}
            showActive={this.showActive}
            removeActive={this.removeActive}
            showAll={this.showAll}
            activeCount={activeItem.length}

          /> : ''
        }
      </div>
    )
  }

}


export default connect(
  state => ({
    todoStore: state
  }),

  dispatch => ({

    addDispatch: (todo) => {

      dispatch({
        type: 'ADD_TODOS',
        payload: todo,
      })
    },
    toggleDispatch: (id) => {
      dispatch({
        type: 'TOGGLE_TODOS',
        payload: id
      })
    },
    removeDispatch: (index) => {
      dispatch({
        type: 'REMOVE_TODOS',
        payload: index
      })
    },
    activeDispatch: (id) => {
      dispatch({
        type: 'ACTIVE_TODOS',
        payload: id
      })
    },
    showAllDispatch: (id) => {
      dispatch({
        type: 'ALL_TODOS',
        payload: id
      })
    },
    showCompleteDispatch: (id) => {
      dispatch({
        type: 'COMPLETE_TODOS',
        payload: id
      })
    },
    removeCompleteDispatch: (id) => {
      dispatch({
        type: 'REMOVE_COMPLETE_TODOS',
        payload: id
      })
    },
    removeActiveDispatch: (id) => {
      dispatch({
        type: 'REMOVE_ACTIVE_TODOS',
        payload: id
      })
    },
  })
)(App);

