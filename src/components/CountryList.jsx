import React from "react";
import { Redirect } from "react-router-dom";

export class CountryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      index: "",
    };
  }

  toInfoCountry = (index) => {
    this.setState({
      isRedirect: true,
      index: index,
    });
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to={`/country/${this.state.index}`} />;
    } else {
      return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.countries.map((country) => (
                <tr key={country.id}>
                  <th scope="row">{country.id}</th>
                  <td>{country.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.toInfoCountry(country.id)}
                    >
                      Ver
                    </button>

                    <button type="button" className="btn btn-success">
                      Modificar
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.props.onDelete(country.id)}
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
