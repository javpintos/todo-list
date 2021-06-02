import React from "react";
import { checkString } from "../app/utils/stringUtils";

export class PlaceForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      countrieId: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();

    const { name, countrieId } = this.state;

    if (checkString(name) && checkString(countrieId)) {
      const newPlace = {
        name: name,
        countrieId: parseInt(countrieId),
        //state: 0
      };

      this.props.addPlace(newPlace);

      this.setState({
        name: "",
        countrieId: "",
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

  handleSelect = (e) => {
    e.preventDefault();
    this.setState({
      countrieId: e.target.value,
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
            placeholder="Nombre del lugar"
            onChange={(e) => this.handleInput(e)}
            value={this.state.name}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            País
          </label>
          <select
            className="form-select"
            id="inputGroupSelect02"
            onChange={(e) => this.handleSelect(e)}
            value={this.state.countrieId}
          >
            <option value={""}>Select option</option>
            {this.props.countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    );
  }
}