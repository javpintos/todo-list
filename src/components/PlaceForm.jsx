import React from "react";
import { checkString } from "../utils/stringUtils";

export class PlaceForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			placeName: "",
			country: {
				name: ""
			},
			countries: []
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
			placeName,
			country: { name },
		} = this.state;

		if (
			checkString(placeName) &&
			checkString(name)
		) {
			const newPlace = {
				placeName: placeName,
				country: this.state.country,
			};

			this.props.addPlace(newPlace);

			this.setState({
				placeName: "",
				country: {
					name: ""
				},
			});
		}else{
            alert("Faltan completar datos")
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
			country: JSON.parse(e.target.value),
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
            name="placeName"
            placeholder="Ingrese nombre del lugar"
            onChange={(e) => this.handleInput(e)}
            value={this.state.placeName}
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
    );
	}
}
