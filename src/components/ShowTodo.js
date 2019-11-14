import React, { useContext } from "react";
import styled from "styled-components";
import Todo from "./Todo";
import { TodoStore } from "./Store";

export default () => {
  const { todolist } = useContext(TodoStore)

  return (
    <Ul>
      {todolist.map(
        (todo, index) => <Todo key={index} todo={todo} id={index} />
      )}
    </Ul>
  )
}

const Ul = styled.ul`
  list-style-type: none;
`
