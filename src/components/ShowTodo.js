import React, { useContext } from "react";
import Todo from "./Todo";
import { TodoStore } from "./Store";

export default () => {
  const { todolist } = useContext(TodoStore)

  return (
    <ol>
      {todolist.map(
        (todo, index) => <Todo key={index} todo={todo} id={index} />
      )}
    </ol>
  )
}
