import React from 'react'
import {
  createPlace,
  deletePlace,
  getAllCountries,
  getAllPlaces,
} from "../app/rest/backend";
import { PlaceForm } from '../components/PlaceForm'
import { PlaceList } from '../components/PlaceList'

const style = {
    paddingTop: "30px"
}
export class PlaceAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      countries: [],
      withError: false,
    };
  }

  componentDidMount() {
    getAllPlaces()
      .then((places) =>
        this.setState({
          places: places,
        })
      )
      .catch(() =>
        this.setState({
          withError: true,
        })
      );

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

  addPlace = (job) => {
    createPlace(job).then((createdPlace) => {
      let country = this.state.countries.find(
        (country) => country.id === createdPlace.countryId
      );

      createdPlace.country = country;

      this.setState({
        countries: [...this.state.countries, createdPlace],
      });
    });
  };

  removePlace = (idPlace) => {
    deletePlace(idPlace).then((id) => {
      const newArr = this.state.places.filter(
        (place) => place.id !== id
      );
      this.setState({
        places: newArr,
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
            <PlaceForm
              countries={this.state.countries}
              addPlace={this.addPlace}
            />
          </div>
          <div className="col">
            <PlaceList places={this.state.places} onDelete={this.removePlace} />
          </div>
        </div>
      </>
    );
  }
}