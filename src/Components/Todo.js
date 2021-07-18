import React, { Component } from 'react'
import '../App.css';
export class Todo extends Component {
    
    
    render() {
        return (
            <div className="todo">
            
                <p style={{textDecoration:this.props.todo.complete?"line-through":""}}>{this.props.todo.title}</p>
            
                <div className="status">
                <button className="completeButton" onClick={()=>this.props.completeTodo(this.props.todo.id)}>Complete</button>
                <button className="removeButton" onClick={()=>this.props.deleteTodo(this.props.todo.id)}>remove</button>
                </div>
            </div>
        )
    }
}

export default Todo
