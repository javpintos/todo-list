import React from "react";
import { checkString } from "../utils/stringUtils";

export class OfferForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
      title: "",
      business: {
        businessName: "",
        place: {
          placeName: "",
          country: {
            name: "",
          },
        },
      },
      businesses: [],
    };
	}

	componentDidMount() {
		if (localStorage.getItem("businesses") != null) {
      this.setState({
        businesses: JSON.parse(localStorage.getItem("businesses")),
      });
    }
	}

	submitForm = (e) => {
		e.preventDefault();

		const {
			title,
			business: { businessName },
			business: { place: {placeName} },
			business: { place: {country: {name}} }
		} = this.state;

		if (
      checkString(title)
      && checkString(businessName)
      && checkString(placeName) 
      && checkString(name)
    ) {
      const newOffer = {
        title: title,
        business: this.state.business,
      };

      this.props.addOffer(newOffer);

      this.setState({
        title: "",
        business: {
          businessName: "",
          place: {
            placeName: "",
            country: {
              name: "",
            },
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
			business: JSON.parse(e.target.value),
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
            name="title"
            placeholder="Ingrese nombre"
            onChange={(e) => this.handleInput(e)}
            value={this.state.title}
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
            value={JSON.stringify(this.state.business)}
          >
            <option value={JSON.stringify({})}>Select option</option>
            {this.state.businesses.map((business, index) => (
              <option key={index + 1} value={JSON.stringify(business)}>
                {business.businessName}
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
            value={JSON.stringify(this.state.business)}
          >
            <option value={JSON.stringify({})}>Select option</option>
            {this.state.businesses.map((business, index) => (
              <option key={index + 1} value={JSON.stringify(business)}>
                {business.place.placeName}
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
            value={JSON.stringify(this.state.business)}
          >
            <option value={JSON.stringify({})}>Select option</option>
            {this.state.businesses.map((business, index) => (
              <option key={index + 1} value={JSON.stringify(business)}>
                {business.place.country.name}
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
