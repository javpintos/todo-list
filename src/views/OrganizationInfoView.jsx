import React from 'react'
import { Link } from "react-router-dom";
import { getOrganization } from '../app/rest/backend'

export class OrganizationInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: {
          name: "",
          placeId: "",
      },
      withError: false,
    };
  }

  componentDidMount() {
    const { idOrganization } = this.props.match.params;
    getOrganization(idOrganization)
      .then((organization) =>
        this.setState({
          organization: organization,
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
      name, placeId
    } = this.state.organization;
    return (
      <>
        {this.state.withError && (
          <div className="row">
            <div className="alert alert-danger" role="alert">
              No se encuentra la información solicitada
            </div>
          </div>
        )}
        <h1>Vista de Empresa</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Ciudad</th>
              <th scope="col">País</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{name}</td>
              <td>{placeId}</td>
              <td>{placeId}</td>
            </tr>
          </tbody>
        </table>
        <Link className="btn btn-primary" to="/organizations">
          Volver
        </Link>
      </>
    );
  }
}