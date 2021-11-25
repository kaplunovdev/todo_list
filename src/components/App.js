import React from 'react';
import Footer from './Footer';
import Title from './Title';
import Item from './Item';
import { store } from '../index';
import '../css/style.css';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo, activeTodo, removeCompleteTodo, showCompleteTodo, addTodo, removeActiveTodo, showAllTodo } from '../store/actions';

export class App extends React.Component {

  inputEnter = (e) => {
    if (e.key === 'Enter') {
      this.addItem();
    }
  }

  addItem = () => {
    if (this.trackInput.value !== '') {
      store.dispatch(addTodo(this.trackInput.value));
      this.trackInput.value = '';
    }

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
                removeItem={() => store.dispatch(removeTodo(elem.id))}
                toggleItem={() => store.dispatch(toggleTodo(elem.id))}
                cheked={elem.isComplete}
              />
            )
          })}
        </ul>

        {(this.props.todoStore.items.length > 0) ?
          <Footer
            countAll={this.props.todoStore.items.length}
            showComplete={() => store.dispatch(showCompleteTodo())}
            itemComplete={itemComplete.length}
            removeComplete={() => store.dispatch(removeCompleteTodo())}
            showActive={() => store.dispatch(activeTodo())}
            removeActive={() => store.dispatch(removeActiveTodo())}
            showAll={() => store.dispatch(showAllTodo())}
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
  }))(App);




