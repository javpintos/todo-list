import React from 'react'
import { Link } from "react-router-dom";
import { getPlace } from '../app/rest/backend'

export class PlaceInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: {
        name: "",
        countrieId: "",
      },
      withError: false,
    };
  }

  componentDidMount() {
    const { idPlace } = this.props.match.params;
    getPlace(idPlace)
      .then((place) =>
        this.setState({
          place: place,
        })
      )
      .catch(() =>
        this.setState({
          withError: true,
        })
      );
  }

  render() {
    const { name, countrieId } = this.state.place;
    return (
      <>
        {this.state.withError && (
          <div className="row">
            <div className="alert alert-danger" role="alert">
              No se encuentra la información solicitada
            </div>
          </div>
        )}
        <h1>Vista de Lugar</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">País</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{countrieId}</td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/places">
          Volver
        </Link>
      </>
    );
  }
}