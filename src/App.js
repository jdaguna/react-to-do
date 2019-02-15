import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js'

class App extends Component {
 constructor(props){
  super(props);
  this.state = { 
   todos: [
    {description: 'Walk the cat', isCompleted: true},
    {description: 'Take the trash out', isCompleted: false},
    {description: 'Pack for trip', isCompleted: false}
   ]
  }
 }
 render() {
   return (
     <div className="App">
      <ul>
       { this.state.todos.map( (todo, index)=>
        <ToDo key= {index } description={ todo.description } isCompleted={todo.isCompleted}/>
       )}
      </ul>       
     </div>
    );
  }
}

export default App;
