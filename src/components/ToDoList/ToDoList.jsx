import React from 'react'

export class ToDoList extends React.Component {
    constructor(props){
        super (props)
        this.props = props
        this.state = {
            inputValue : "",
            tasks: ["Aprende React", "Aprende Webpack", "Aprende Babel"]
        }
    }

     addTask(task){
        this.setState({
            tasks: [...this.state.tasks, task]//... sprite operator: trae todos los elementos que ya tiene el arreglo original para actualizarlo y no sobreescribirlo
        })
     }

    handleInput(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    render(){
        return (
            <>
                <ul>
                    {this.state.tasks.map((task, index) => {
                        return <li key={index}> {task} </li>
                    })}
                </ul>
                <input value={this.state.inputValue} onChange={(e) => this.handleInput(e)} type="text" /><button onClick={() => this.addTask(this.state.inputValue)}>Agregar</button>
            </>
        )
    }
}