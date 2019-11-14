import React, { useState } from "react";

const init = [
  {
    title: "hogechan",
    isDone: false,
  },
  {
    title: "mugichan",
    isDone: false,
  }
]

export const TodoStore = React.createContext()
export  const TodoProvider = ({ children }) => {

  const [todolist, setTodolist] = useState(init)

  const doneTodo = (id) => {
    setTodolist(
      todolist => todolist.map(
        (todo, i) => id === i
          ? { title: todo.title, isDone: !todo.isDone }
          : todo
      )
    )
  }

  const createTodo = (title) => {
    setTodolist(
      todolist => [
        ...todolist,
        { title: title, isDone: false }
      ]
    )
  }

  return (
    <TodoStore.Provider value={{todolist, doneTodo, createTodo}}>
      { children }
    </TodoStore.Provider>
  )
}
