import React from "react";
import { DI } from "./Core/DependencyInjection";
import withLoading from "./withLoading";

const List = (props) => {
  const { todos, item } = props;
  return (
    <div>
      {todos.map((todo, idx) => {
        return (
          <li key={idx}>
            {todo.title} - {item}
          </li>
        );
      })}
    </div>
  );
};

export default DI(withLoading(List));
