import React from "react";
import { checkString } from "../app/utils/stringUtils";

export class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      position: "",
      description: "",
      organizationId: ""
      /* organization: {
        organizationId: "",
        name: "",
      },
      place: {
        placeId: "",
        name: "",
      },
      country: {
        countryId: "",
        name: "",
      }, 
      organizations: [],
      countries: [],
      countries: [],*/
    };
  }

  /* componentDidMount() {
    this.setState({
      organizations: this.props.organizations,
      places: this.props.places,
      countries: this.props.countries
    });
  } */

  submitForm = (e) => {
    e.preventDefault();

    const { position, description, organizationId } = this.state;

    if (
      checkString(position) &&
      checkString(description) &&
      checkString(organizationId)
    ) {
      const newJob = {
        position: position,
        description: description,
        organizationId: parseInt(organizationId),
      };

      this.props.addJob(newJob);

      this.setState({
        position: "",
        description: "",
        organizationId: "",
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
      organizationId: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Puesto laboral
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="position"
            placeholder="Nombre del puesto laboral"
            onChange={(e) => this.handleInput(e)}
            value={this.state.position}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Descripción
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput2"
            name="description"
            placeholder="Descripción del puesto laboral"
            onChange={(e) => this.handleInput(e)}
            value={this.state.description}
          />
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Empresa
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            onChange={(e) => this.handleSelect(e)}
            value={this.state.organizationId}
          >
            <option value={""}>Select option</option>
            {this.props.organizations.map((organization) => (
              <option key={organization.id} value={organization.id}>
                {organization.name}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">
            Lugar
          </label>
          <select
            className="form-select"
            id="inputGroupSelect02"
            onChange={(e) => this.handleSelect(e)}
            value={this.state.organizationId}
          >
            <option value={""}>Select option</option>
            {this.props.organizations.map((organization) => (
              <option key={organization.id} value={organization.id}>
                {organization.placeId}
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
            id="inputGroupSelect03"
            onChange={(e) => this.handleSelect(e)}
            value={this.state.organizationId}
          >
            <option value={""}>Select option</option>
            {this.props.organizations.map((organization) => (
              <option key={organization.id} value={organization.id}>
                {organization.placeId}
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
