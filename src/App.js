import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";

const GlobalStyle = createGlobalStyle`
  body{
    background:#cfd2d4;
  }

`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <TodoTemplate>
        <TodoHead /> 
        <TodoList /> 
        
      </TodoTemplate>
    </>
  );
}

export default App;
