import React from "react";
import { checkString } from "../app/utils/stringUtils";

export class OrganizationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      placeId: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();

    const { name, placeId } = this.state;

    if (checkString(name) && checkString(placeId)) {
      const newOrganization = {
        name: name,
        placeId: parseInt(placeId),
        //state: 0
      };

      this.props.addOrganization(newOrganization);

      this.setState({
        name: "",
        placeId: ""
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
      placeId: e.target.value,
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
            placeholder="Nombre de la empresa"
            onChange={(e) => this.handleInput(e)}
            value={this.state.name}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Lugar
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={(e) => this.handleSelect(e)}
            value={this.state.placeId}
          >
            <option value={""}>Select option</option>
            {this.props.places.map((place) => (
              <option key={place.id} value={place.id}>
                {place.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            País
          </label>
          <select
            className="form-select"
            id="inputGroupSelect02"
            onChange={(e) => this.handleSelect(e)}
            value={this.state.placeId}
          >
            <option value={""}>Select option</option>
            {this.props.places.map((place) => (
              <option key={place.id} value={place.id}>
                {place.countrieId}
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