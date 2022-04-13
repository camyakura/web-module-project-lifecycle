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
         console.log(err)
      })
  }

  componentDidMount() {
    this.fetchTodos()
  }

  postNewTodo = () => {
    axios.post(URL, {name: this.state.todoNameInput})
      .then(res => {
        this.setState({...this.state, todos: this.state.todos.concat(res.data.data)})
        this.setState({...this.state, todoNameInput: ''})
      })
      .catch(err => {
        console.log(err)
      })
  }

  onTodoNameChange  = evt => {
    const { value } = evt.target
    this.setState({...this.state, todoNameInput : value})
  }

  onTodoSubmit = evt => {
    evt.preventDefault()
    this.postNewTodo()
  }


  render() {
    return (
      <div>
        <h1>Todo List</h1>

        <TodoList 
          todos={this.state.todos}
          displayCompleted={this.state.displayCompleted}
          
        />
        
        <form onSubmit={this.onTodoSubmit}>
          <input 
            value={this.state.todoNameInput}
            onChange={this.onTodoNameChange}
            type='text'
            placeholder='type todo'
          />
          <input type='submit'/>
        </form>
        
        <button>Hide Completed</button>
      </div>
    )
  }
}
