import React from 'react'

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.input = React.createRef()

        this.state = {
            list: []
        }
    }

    handleClick = () => {
        this.setState({
            value: this.state
        })
    }
    addItem = (event) => {
        this.input.current.value = ''

        this.setState({
            list: [
                ...this.state.list,
            ]
        })
    }


    render() {
        return (
            <div>
                <h1>Todo list</h1>
                <input type="text" ref={this.input} />
                <button onClick={this.addItem}>Add</button>
            </div>
        )
    }
}
