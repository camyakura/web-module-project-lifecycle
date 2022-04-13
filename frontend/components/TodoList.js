import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos:</h2>

        <ul>
          {
            this.props.todos.reduce((acc,todo) => {
              if(this.props.displayCompleted || !todo.completed){
                return acc.concat(
                  <Todo 
                    todo={todo} 
                    key={todo.id}
                    toggleCompleted={this.props.toggleCompleted}
                  />
                )  
              } else {
                return acc
              }
            }, [])
          }
        </ul>
      </div>
    )
  }
}
