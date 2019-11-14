import React from "react";
import styled from "styled-components";
import ShowTodo from "./ShowTodo";
import CreateTodo from "./CreateTodo";
import { TodoProvider } from "./Store";

export default () => (
  <Wrapper>
    <h1>React - Simple ToDo</h1>
    <TodoProvider>
      <CreateTodo />
      <ShowTodo />
    </TodoProvider>
  </Wrapper>
)

const Wrapper = styled.div`
  margin: 3em auto;
  width: 28em;
  padding: 1em 1.5em;
  background-color: #fff;
  border-radius: 0.5em;
  box-shadow: 0.2em 0.6em 1em rgba(230, 230, 230, 0.4);

  display: flex;
  flex-direction: column;
  align-items: center;
`
