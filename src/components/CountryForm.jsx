import React from "react";

export class CountryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  submitForm = (e) => {
    e.preventDefault();

    const newCountry = {
      name: this.state.name,
    };

    this.props.addCountry(newCountry);
  }

  handleInput = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render(){
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            name="name"
            placeholder="Ingrese nombre del país"
            onChange={(e) => this.handleInput(e)}
            value={this.state.name}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    );
  }
}
