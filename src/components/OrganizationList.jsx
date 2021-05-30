import React from "react";
import { Redirect } from "react-router-dom";

export class OrganizationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      index: "",
    };
  }

  toInfoOrganization = (index) => {
    this.setState({
      isRedirect: true,
      index: index,
    });
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to={`/organization/${this.state.index}`} />;
    } else {
      return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Ciudad</th>
                <th scope="col">País</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.organizations.map((organization) => (
                <tr key={organization.id}>
                  <th scope="row">{organization.id}</th>
                  <td>{organization.name}</td>
                  <td>{organization.placeId}</td>
                  <td>{organization.placeId}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.toInfoOrganization(organization.id)}
                    >
                      Ver
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                    >
                      Modificar
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.props.onDelete(organization.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
    }
  }
}
