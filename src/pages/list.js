import React, { Component } from 'react';
import  { FirebaseContext, withFirebase } from '../Firebase';

class List extends Component {
  state = { 
    todoList: [],
   }
  componentDidMount() {
    this.props.firebase.db.collection("todos")
    .get()
    .then(querySnapshot => {
      const todoList = [];
      querySnapshot.docs.forEach(doc => {
        const todo = {};
        todo.id = doc.id;
        Object.assign(todo, doc.data());
        todoList.push(todo);
      });
      this.setState({todoList})
      console.log('this.state.todoList: ', this.state.todoList);
    });
  }
  render() { 
    return (
      <FirebaseContext.Consumer>        
        {firebase => {
          return (<div>
            <h1>List with firestore</h1>
          </div>);
        }}
      </FirebaseContext.Consumer>
    );
  }
}
 
export default withFirebase(List);