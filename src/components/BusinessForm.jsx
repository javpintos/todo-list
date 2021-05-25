import React from "react";
import { checkString } from "../utils/stringUtils";

export class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businessName: "",
      place: {
        placeName: "",
        country: {
          name: "",
        },
      },
      places: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("places") != null) {
      this.setState({
        places: JSON.parse(localStorage.getItem("places")),
      });
    }
  }

  submitForm = (e) => {
    e.preventDefault();

    const {
      businessName,
      place: { placeName },
      place: {country: { name }}
    } = this.state;

    if (
      checkString(businessName) &&
      checkString(placeName) &&
      checkString(name)
    ) {
      const newBusiness = {
        businessName: businessName,
        place: this.state.place,
      };

      this.props.addBusiness(newBusiness);

      this.setState({
        businessName: "",
        place: {
          placeName: "",
          country: {
            name: "",
          },
        },
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
      place: JSON.parse(e.target.value),
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
            name="businessName"
            placeholder="Ingrese nombre de la empresa"
            onChange={(e) => this.handleInput(e)}
            value={this.state.businessName}
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
            value={JSON.stringify(this.state.place)}
          >
            <option value={JSON.stringify({})}>Select option</option>
            {this.state.places.map((place, index) => (
              <option key={index + 1} value={JSON.stringify(place)}>
                {place.placeName}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect02">
            País
          </label>
          <select
            className="form-select"
            id="inputGroupSelect02"
            onChange={(e) => this.handleSelect(e)}
            value={JSON.stringify(this.state.place)}
          >
            <option value={JSON.stringify({})}>Select option</option>
            {this.state.places.map((place, index) => (
              <option key={index + 1} value={JSON.stringify(place)}>
                {place.country.name}
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
