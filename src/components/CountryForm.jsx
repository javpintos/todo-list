import React from "react";
import { checkString } from "../app/utils/stringUtils";

export class CountryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();

    const { name } = this.state;

    if (checkString(name)) {
      const newCountry = {
        name: name,
      };

      this.props.addCountry(newCountry);

      this.setState({
        name: "",
      });
    } else {
      alert("Faltan completar datos");
    }
  };

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="name"
            placeholder="Nombre del país"
            onChange={(e) => this.handleInput(e)}
            value={this.state.name}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    );
  }
}