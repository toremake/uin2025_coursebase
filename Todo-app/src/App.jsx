import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";

function App() {
  const [count, setCount] = useState(0);

  const startTodos = [
    {
      id: 0,
      title: "Lage middag",
      content:
        "Skal lage spaghetti med kjøttsaus og parmasan, husk å handle på vei hjem fra jobb!",
    },
  ];

  return (
    <>
      <Nav username="ackarlse" />
      <main>
        <h1>To do app</h1>
        <TodoForm />
        <Todos startTodos={startTodos} />
      </main>
    </>
  );
}

export default App;
