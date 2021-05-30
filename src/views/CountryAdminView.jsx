import React from 'react'
import { 
  createCountry, 
  deleteCountry, 
  getAllCountries 
} from "../app/rest/backend";
import { CountryForm } from '../components/CountryForm'
import { CountryList } from '../components/CountryList'

const style = {
    paddingTop: "30px"
}
export class CountryAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      withError: false,
    };
  }

  componentDidMount() {
    getAllCountries()
      .then((countries) =>
        this.setState({
          countries: countries,
        })
      )
      .catch(() =>
        this.setState({
          withError: true,
        })
      );
  }

  addCountry = (country) => {
    this.setState({
      countries: [...this.state.countries, country],
    });
  };

  addCountry = (country) => {
    createCountry(country).then((createdCountry) => {
      this.setState({
        countries: [...this.state.countries, createdCountry],
      });
    });
  };

  removeCountry = (idCountry) => {
    deleteCountry(idCountry).then((id) => {
      const newArr = this.state.countries.filter(
        (country) => country.id !== id
      );
      this.setState({
        countries: newArr,
      });
    });
  };

  render() {
    return (
      <>
        {this.state.withError && (
          <div className="row" style={style}>
            <div className="alert alert-danger" role="alert">
              No se pudieron obtener datos desde el servidor
            </div>
          </div>
        )}
        <div className="row" style={style}>
          <div className="col">
            <CountryForm addCountry={this.addCountry} />
          </div>
          <div className="col">
            <CountryList
              countries={this.state.countries}
              onDelete={this.removeCountry}
            />
          </div>
        </div>
      </>
    );
  }
}