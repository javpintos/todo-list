import React from 'react'
import { Link } from "react-router-dom";
import { getCountry } from '../app/rest/backend'

export class CountryInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: {
        name: "",
      },
      withError: false,
    };
  }

  componentDidMount() {
    const { idCountry } = this.props.match.params;
    getCountry(idCountry)
      .then((country) =>
        this.setState({
          country: country,
        })
      )
      .catch(() =>
        this.setState({
          withError: true,
        })
      );
  }

  render() {
    const {
      name
    } = this.state.country;
    return (
      <>
        {this.state.withError && (
          <div className="row">
            <div className="alert alert-danger" role="alert">
              No se encuentra la información solicitada
            </div>
          </div>
        )}
        <h1>Vista de País</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/countries">
          Volver
        </Link>
      </>
    );
  }
}