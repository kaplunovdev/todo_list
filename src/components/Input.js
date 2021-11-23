import React from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from "..";
//const count = useSelector(state => state.todos.text)
import { addTodos } from '../redux/rootReducer'

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

    }


    render() {

        const { input } = this.state;
        return (
            <div>
                <input
                    className="input_main"
                    type="text"
                    placeholder="Что записать?"
                    autoFocus
                    onChange={this.changeInput}
                    onKeyPress={this.inputEnter}
                    ref={(input) => { this.trackInput = input }}
                />
            </div>


        )
    }

}
export default Input;