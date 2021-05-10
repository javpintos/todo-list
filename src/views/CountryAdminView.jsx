import React from "react";
import { CountryForm } from "../components/CountryForm";

export class CountryAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("countries") != null) {
      this.setState({
        countries: JSON.parse(localStorage.getItem("countries")),
      });
    }
  }

  addCountry = (country) => {
    this.setState({
      countries: [...this.state.countries, country],
    });
  };

  saveData = () => {
    window.localStorage.setItem("countries", JSON.stringify(this.state.countries));
  };

  render() {
    return (
      <div>
        <CountryForm addCountry={this.addCountry} />
        <button onClick={this.saveData} className="btn btn-warning">
          Guardar
        </button>
      </div>
    );
  }
}
