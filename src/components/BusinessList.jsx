import React from "react";
import { Redirect } from "react-router-dom";

export class BusinessList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirect: false,
      index: "",
    };
  }

  toInfoBusiness = (index) => {
    this.setState({
      isRedirect: true,
      index: index,
    });
  };

  saveData = () => {
    localStorage.setItem("businesses", JSON.stringify(this.props.businesses));
  };

  render() {
    if (this.state.isRedirect) {
      return <Redirect to={`/business/${this.state.index}`} />;
    } else {
      return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Lugar</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.businesses.map((business, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{business.businessName}</td>
                  <td>{business.place.placeName}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.toInfoBusiness(index)}
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
