import React, { useContext } from "react";
import { TodoStore } from "./Store";

export default ({ todo, id }) => {
  const { doneTodo } = useContext(TodoStore)

  return (
  <li onClick={() => doneTodo(id)}>
    { todo.title }
    <span>{ todo.isDone ? '[X]' : '[ ]' }</span>
  </li>
  )
}
