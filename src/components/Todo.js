import React, { useContext } from "react";
import styled from "styled-components";
import { TodoStore } from "./Store";

export default ({ todo, id }) => {
  const { doneTodo } = useContext(TodoStore)

  return (
    <Li onClick={() => doneTodo(id)} done={todo.isDone}>
      { todo.title }
    </Li>
  )
}

const Li = styled.li`
  text-decoration: ${props => props.done ? "line-through" : "none"};
  opacity: ${props => props.done ? 0.3 : 1}
  user-select: none;
  cursor: pointer;
`
