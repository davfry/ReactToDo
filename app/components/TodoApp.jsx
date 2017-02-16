import React, { PropTypes } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

const TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Do dishes'
        }, {
          id: 3,
          text: 'Eat Lunch'
        }, {
          id: 4,
          text: 'Clean floors'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    alert('new todo: ' + text);
  },
  render () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
})

export default TodoApp
