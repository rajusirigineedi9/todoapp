import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import React from 'react';
import TodoForm from './Components/TodoForm';


class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todos:[{id:1,title:"first todo",complete:false},
      {id:2,title:"second todo",complete:false}]
    }
  }

  addTodo=(title)=>{

let todos=[...this.state.todos]
let id=todos[todos.length-1]?todos[todos.length-1]["id"]+1:0
let newTodo={
  id,
  title,
  complete:false
}
todos.push(newTodo)
this.setState({todos});
  }

  completeTodo=(id)=>{
let todos=[...this.state.todos];
todos.filter(todo=>{
  if(todo.id===id){
  todo.complete=true;
}

  });
  this.setState({todos});
}

deleteTodo=(id)=>{
  let todos=[...this.state.todos];
  todos.filter((todo,index)=>{
    if(todo.id===id)
    {
      todos.splice(index,1);
    }
  });
  this.setState({todos});

}
  
  render(){
  return (
    <div className="App">
      <div className="todolength">
      <div className="titletodo">
     <h1>Todo App to add tasks</h1>
     </div>
     {this.state.todos.map(todo=>(
      <Todo todo={todo} completeTodo={id=>this.completeTodo(id)} 
      deleteTodo={id=>this.deleteTodo(id)}
      />
     ))}
     </div>
     
     <TodoForm addTodo={todo=>this.addTodo(todo)}/>
    

    
     
    </div>
  );
}
}

export default App;
