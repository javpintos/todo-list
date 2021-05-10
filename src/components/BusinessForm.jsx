import React from "react";

export class BusinessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: "",
      city: "",
      country: "",
    };
  }

  submitForm = (e) => {
    e.preventDefault();

    const newBusiness = {
      business: this.state.business,
      city: this.state.city,
      country: this.state.country,
    };

    this.props.addBusiness(newBusiness);
  };

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <br />
        <form onSubmit={(e) => this.submitForm(e)}>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Empresa
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              name="business"
              placeholder="Ingrese empresa"
              onChange={(e) => this.handleInput(e)}
              value={this.state.business}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput2" className="form-label">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput2"
              name="city"
              placeholder="Ingrese ciudad"
              onChange={(e) => this.handleInput(e)}
              value={this.state.city}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput3" className="form-label">
              País
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput3"
              name="country"
              placeholder="Ingrese país"
              onChange={(e) => this.handleInput(e)}
              value={this.state.country}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </form>
      </>
    );
  }
}