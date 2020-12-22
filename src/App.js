import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import { TodoProvieder } from "./components/TodoContext";

const GlobalStyle = createGlobalStyle`
  body{
    background:#cfd2d4;
  }

`;

function App() {
  return (
    <>
      <TodoProvieder>
        <GlobalStyle></GlobalStyle>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvieder>
    </>
  );
}

export default App;
