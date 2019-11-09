import React, { Component } from 'react';
import  { FirebaseContext, withFirebase } from '../Firebase';
import { connect } from 'react-redux';

class List extends Component {
  render() { 
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
      this.props.getList(todoList);
    });
    return (
      <FirebaseContext.Consumer>        
        {firebase => {
          return (<div>
            <h1>List</h1>
            <ul>
              {this.props.todoList.map((todo) => (
                <li key={todo.id}>
                  {todo.task} {todo.date} {todo.time} {todo.status}
                </li>
              ))}
            </ul>
          </div>);
        }}
      </FirebaseContext.Consumer>
    );
  }
}
 
const mapStateToProps = (state) => {
  return {
    todoList: state.todoList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (todoList) => dispatch({type:'GET_LIST', value:todoList}),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withFirebase(List));