import React from "react";
import { Provider, useSelector, useDispatch } from 'react-redux';
//const count = useSelector(state => state.todos.text)



class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };


    }

    changeInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }


    inputEnter = (e) => {
        if (e.key === 'Enter') {

            this.addTodo();


        }
    }

    addTodo = () => {
        const { input } = this.state;

        if (input) {
            this.props.addTodo(input);
            this.setState({
                input: '',
            })
        }


    }




    render() {
        const { input } = this.state;
        return (
            <input
                className="input_main"
                type="text"
                placeholder="Что записать?"
                autoFocus
                onChange={this.changeInput}
                value={input}
                onKeyPress={this.inputEnter}


            />
        )
    }

}
export default Input;