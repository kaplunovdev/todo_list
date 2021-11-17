import React from "react";

class Input extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };


        // this.inputEnter = this.inputEnter.bind(this)
        // this.changeInput = this.changeInput.bind(this)
        // this.addTodo = this.addTodo.bind(this)
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