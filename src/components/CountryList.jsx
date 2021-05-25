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

  saveData = () => {
    localStorage.setItem("countries", JSON.stringify(this.props.countries));
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
              {this.props.countries.map((country, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{country.name}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.toInfoCountry(index)}
                    >
                      Info
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.props.onDelete(index)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={this.saveData}>
            Guardar datos
          </button>
        </>
      );
    }
  }
}
