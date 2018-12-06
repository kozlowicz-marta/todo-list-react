import React from 'react'

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props)

        this.input = React.createRef()
        this.currentId = 0

        this.state = {
            list: [],
        }
    }

    addItem = (event) => {
        event.preventDefault()

        const { value } = this.input.current

        if (!value) return

        this.input.current.value = ''

        this.setState({
            list: [
                ...this.state.list,
                {
                    value,
                    id: this.currentId++
                }
            ]
        })
    }

    itemClick = (id) => () => {
        const itemIndex = this.state.list.findIndex(item => item.id === id)
        const item = this.state.list[itemIndex]

        this.setState(myState => ({
            list: [
                ...myState.list.slice(0, itemIndex),
                {
                    ...item,
                },
                ...myState.list.slice(itemIndex + 1)
            ]
        }))
    }

    render() {

        return (
            <div>
                <h1 className='name'>My to-do list</h1>

                <form onSubmit={this.addItem}>
                    <input type='text' ref={this.input} className='input' />
                    <button type='submit' className='btn'>Add</button>
                </form>

                <ul>
                    {this.state.list
                        .map((item) => (
                            <li
                                key={item.id}
                                onClick={this.itemClick(item.id)}
                            >
                                {item.value}
                            </li>
                        ))
                    }
                </ul>

            </div>
        )
    }
}

