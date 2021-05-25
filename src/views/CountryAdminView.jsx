import React from 'react'
import { CountryForm } from "../components/CountryForm";
import { CountryList } from "../components/CountryList";

const style = {
  paddingTop: "30px",
};

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

  deleteCountry = (indexCountry) => {
    const newArr = this.state.countries.filter(
      (_, index) => index !== indexCountry
    );

    this.setState({
      countries: newArr,
    });
  };

  saveData = () => {
    window.localStorage.setItem(
      "countries",
      JSON.stringify(this.state.countries)
    );
  };

  render() {
    return (
      <div className="row" style={style}>
        <div className="col">
          <CountryForm addCountry={this.addCountry} />
        </div>
        <div className="col">
          <CountryList
            countries={this.state.countries}
            onDelete={this.deleteCountry}
          />
        </div>
      </div>
    );
  }
}