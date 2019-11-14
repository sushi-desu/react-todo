import React, { useContext } from "react";
import { TodoStore } from "./Store";

export default () => {
  const { createTodo } = useContext(TodoStore)
  const onkeydownEnter = (e) => {
    if (e.keyCode === 13) {
      createTodo(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <input onKeyDown={ onkeydownEnter } />
  )
}
