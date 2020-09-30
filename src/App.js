import React from 'react';
import Todolist from './todolist/todolist';
import AddTodolist from './addtodo/addtodo';

import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  render() {
    return (
      <div>
        <AddTodolist BtnaddTodo={this.addTodo}></AddTodolist>
        <Todolist Btnupdatetodo={this.updatetodo} todos={this.state.todos}></Todolist>
      </div>

    )
  }

  componentDidMount = () => {
    const todos = localStorage.getItem('todos');

    if (todos) {
      const savetodo = JSON.parse(todos);
      this.setState({ todos: savetodo });

      // console.log('Yes Todo', todos);
    } else {
      console.log('No Todo!!');
    }
  };

  // addTodo = (todo) => console.log(todo);
  addTodo = async (todo) => {
    await this.setState({
      todos: [...this.state.todos, {
        text: todo,
        completed: false
      }]
    });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    console.log(localStorage.getItem('todos'))
  };

  updatetodo = async (todo) => {
    const newtodos = this.state.todos.map(_todo => {
      if (todo === _todo)
        return {
          text: todo.text,
          completed: !todo.completed
        }
      else
        return _todo
    });
    await this.setState({ todos: newtodos });
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
    // console.log(newtodos)
  };


}

// 
export default App;
