import React from "react";
import ShowTodo from "./ShowTodo";
import CreateTodo from "./CreateTodo";
import { TodoProvider } from "./Store";

export default () => {

  return (
    <div>
      <TodoProvider>
        <CreateTodo />
        <ShowTodo />
      </TodoProvider>
    </div>
  )
}
