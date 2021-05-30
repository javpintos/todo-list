import React from "react";
import { Redirect } from "react-router-dom";

export class PlaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      index: "",
    };
  }

  toInfoPlace = (index) => {
    this.setState({
      isRedirect: true,
      index: index,
    });
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to={`/place/${this.state.index}`} />;
    } else {
      return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">País</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.places.map((place) => (
                <tr key={place.id}>
                  <th scope="row">{place.id}</th>
                  <td>{place.name}</td>
                  <td>{place.countrieId}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.toInfoPlace(place.id)}
                    >
                      Ver
                    </button>

                    <button type="button" className="btn btn-success">
                      Modificar
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.props.onDelete(place.id)}
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