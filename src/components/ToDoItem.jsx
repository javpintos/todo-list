import React from "react";

export const ToDoItem = ({ item, index, onDelete }) => {
  <>
    <li className="list-group-item mb-3">
      {item.nombrePuesto} {item.empresa} {item.ciudad} {item.pais}
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => onDelete(index)}
      >
        Eliminar
      </button>
    </li>
  </>
};
