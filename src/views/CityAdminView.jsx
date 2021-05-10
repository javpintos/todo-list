import React from "react";
import { CityForm } from "../components/CityForm";

export class CityAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      countries: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("cities") != null) {
      this.setState({
        cities: JSON.parse(localStorage.getItem("cities")),
        countries: JSON.parse(localStorage.getItem("countries")),
      });
    }
  }

  addCity = (city) => {
    this.setState({
      cities: [...this.state.cities, city],
    });
  };

  saveData = () => {
    window.localStorage.setItem("cities", JSON.stringify(this.state.cities));
  };

  render() {
    return (
      <div>
        <CityForm addCity={this.addCity} />
        <button onClick={this.saveData} className="btn btn-warning">
          Guardar
        </button>
      </div>
    );
  }
}
