import React from "react";
import { Redirect } from "react-router-dom";

export class OfferList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isRedirect: false,
			index: "",
		};
	}

	toInfoOffer = (index) => {
		this.setState({
			isRedirect: true,
			index: index,
		});
	};

	saveData = () => {
		localStorage.setItem("offers", JSON.stringify(this.props.offers));
	};

	render() {
		if (this.state.isRedirect) {
			return <Redirect to={`/offer/${this.state.index}`} />;
		} else {
			return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Empresa</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.offers.map((offer, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{offer.title}</td>
                  <td>{offer.business.businessName}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.toInfoOffer(index)}
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
