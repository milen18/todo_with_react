import { createContext, useState } from "react";

import TodoBody from "./todo-body/TodoBody";
import TodoHead from "./todo-head/TodoHead";
import TodoStatistics from "./todo-statistics/TodoStatistics";

import "./Todo.scss";

export const TodoContext = createContext(null);

const Todo = () => {
  //here are our states
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo">
      <TodoStatistics todos={todos} setTodos={setTodos} />
      <TodoHead
        inputValue={inputValue}
        setInputValue={setInputValue}
        setTodos={setTodos}
      />
      <TodoContext.Provider value={{ setTodos }}>
        <TodoBody todos={todos} />
      </TodoContext.Provider>
    </div>
  );
};

export default Todo;
