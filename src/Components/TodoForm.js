import React, { Component } from 'react'

export class Todoform extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:""
        }
    }

    addTodo=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.data)
        this.setState({data:""})
    }
    
    render() {
        return (
            <form onSubmit={this.addTodo}>
            <div>
                <input type="text" placeholder="enter value" value={this.state.data} onChange={(e)=>this.setState({data:e.target.value})}></input>
            </div>
            
            </form>
        )
    }
}

export default Todoform
