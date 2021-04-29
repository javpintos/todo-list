import React from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(newItem) {
    this.setState({
      items: [...this.state.items, newItem], //... sprite operator: trae todos los elementos que ya tiene el arreglo original para actualizarlo y no sobreescribirlo
    });
  }

  deleteItem(id) {
    const newArray = this.state.items.filter((item, index) => index !== id);
    this.setState({
      items: newArray,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <ToDoForm onSubmit={this.addItem} />
          <hr className="my-4"/>
          <ToDoList items={this.state.items} onDelete={this.deleteItem} />
        </div>
      </>
    );
  }
}
