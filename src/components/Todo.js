import React, { Component } from 'react'

export default class Todo extends Component {

    constructor(props){
        super(props);

        this.state={
            tasks:[{id:1 , txt:'Task1'},{id:2 , txt:'Task2'},{id:3 , txt:'Task3'}],
            currTask:'',
        }

    }

    handleChange=(e)=>{
       let val = e.target.value;
       this.setState({currTask:val})

    }

    addTask=()=>{
        let nta = [...this.state.tasks ,{id:this.state.tasks.length+1 , txt:this.state.currTask}]
        this.setState({
            tasks:nta,
            currTask:''
        })
    }

    deleteTask=(id)=>{
         let nta = this.state.tasks.filter(task =>{
           return task.id!==id
         })
         this.setState({
             tasks:nta,
         })
    }

    
    render() {

        return (
            <div>
                <div className='input_container'>
                    <input type="text" onChange={this.handleChange} value={this.currTask}></input>
                    <button onClick={this.addTask}>ADD TASK</button>
                </div>

                <div className="task_list">
                  <ul>
                      {
                          this.state.tasks.map(task=>(
                              <li key={task.id}>
                                  <h1>{task.txt}</h1>
                                  <button onClick={()=>this.deleteTask(task.id)}>Delete Task</button>
                              </li>
                          ))
                      }
                  </ul>
                </div>
            </div>
        )
    }
}
