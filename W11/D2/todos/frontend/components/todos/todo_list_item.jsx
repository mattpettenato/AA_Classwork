import React from 'react';
import ReactDOM from "react-dom";

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li>{ props.todo.title }</li>
  }
}

export default TodoListItem;