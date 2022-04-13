import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h2>Todos:</h2>

        <ul>
          {
            this.props.todos.map(todo => {
              return <Todo todo={todo} key={todo.id}/>
            })
          }
        </ul>
      </div>
    )
  }
}
