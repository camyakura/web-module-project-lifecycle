import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
          <form onSubmit={this.props.onTodoSubmit}>
            <input 
              value={this.props.todoNameInput}
              onChange={this.props.onTodoNameChange}
              type='text'
              placeholder='type todo'
            />
            <input type='submit'/>
          </form>
          
          <button onClick={this.props.toggleDisplayCompleted}>
            {this.props.displayCompleted ? 'Hide' : 'Show' } Completed
          </button>
        
      </div>
    )
  }
}
