import React from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: []
    }
    this.addOffer = this.addOffer.bind(this);
    this.deleteOffer = this.deleteOffer.bind(this);
  }

  addOffer(newOffer) {
    this.setState({
      offers: [...this.state.offers, newOffer] //... sprite operator: trae todos los elementos que ya tiene el arreglo original para actualizarlo y no sobreescribirlo
    })
  }

  deleteOffer(id) {
    const newArray = this.state.offers.filter(
      (offer, index) => index !== id)
    this.setState({
      offers: newArray
    });
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col">
              <ToDoForm onSubmit={this.addOffer} />
          </div>
           <div className="col">
              <ToDoList offers={this.state.offers}
              onDelete={this.deleteOffer} />
          </div>
        </div>
      </>
    )
  }
}