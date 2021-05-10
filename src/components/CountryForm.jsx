import React from "react";

export class CountryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "",
      
    };
  }

  submitForm = (e) => {
    e.preventDefault();

    const newCountry = {
      country: this.state.country
    };

    this.props.addCountry(newCountry);
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
              Pais
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
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
