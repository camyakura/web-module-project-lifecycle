import React from 'react'
import axios from 'axios'
import Form from './Form'
import TodoList from './TodoList'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  state = {
    todos: [],
    error: '',
    todoNameInput: '',
    displayCompleted: true,
  }

  fetchTodos = () => {
    axios.get(URL)
      .then(res => {
        this.setState({...this.state, todos: res.data.data})
      })
      .catch(err => {
         this.setState({...this.state, error: err.response.data.message})
      })
  }

  componentDidMount() {
    this.fetchTodos()
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>

        <h2>Todos:</h2>
        <ul>
          {this.state.todos.map(todo => {
            return <li>{todo}</li>
          })}
        </ul>
        
        <form>
          <input />
          <button>Submit</button>
        </form>
        
        <button>Hide Completed</button>
      </div>
    )
  }
}
