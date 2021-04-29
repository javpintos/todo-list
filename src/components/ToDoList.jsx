import React from "react";
import { ToDoItem } from "./ToDoItem";

export const ToDoList = function (props) {
  return (
    <div className="row">
      <ul className="list-group">
        {props.items.map((item, index) => (
          <ToDoItem
            key={index}
            item={item}
            index={index}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </div>
  );
};
