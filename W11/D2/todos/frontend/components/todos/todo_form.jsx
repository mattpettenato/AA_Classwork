import React from 'react';
import ReactDOM from 'react-dom';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: new Date().getTime(),
      title: "",
      body: "",
      done: false
    }
  }
  render(){
    return (
      <p>temp todoform</p>
    )
  }
}

export default TodoForm;