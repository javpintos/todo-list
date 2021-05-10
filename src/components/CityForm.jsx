import React from "react";

export class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      country: "",/* pais seleccionado en el select */
      countries: []/* listado de paises que veo en el select*/
    };
  }

  componentDidMount() {
    if (localStorage.getItem("countries") != null) {
      this.setState({
        countries: JSON.parse(localStorage.getItem("countries")),
      });
    }
  }

  submitForm = (e) => {
    e.preventDefault();

    const {
      city,
      country,
    } = this.state;

    const newCity = {
      city: this.state.city,
      country: this.state.country,
    };

    this.props.addCity(newCity);

    this.setState({
      city: "",
      country: ""
    });
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
      country: JSON.parse(e.target.value),
    });
  };

  render() {
    return (
      <>
        <br />
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="city"
              placeholder="Ingrese ciudad"
              onChange={(e) => this.handleInput(e)}
              value={this.state.city}
            />
          </div>
          <div className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              País
            </label>
            <select
              className="form-select"
              id="inputGroupSelect01"
              onChange={(e) => this.handleSelect(e)}
              value={JSON.stringify(this.state.country)}
            >
              <option value={JSON.stringify({})}>Select option</option>
              {this.state.countries.map((country, index) => (
                <option key={index + 1} value={JSON.stringify(country)}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </>
    );
  }
}
