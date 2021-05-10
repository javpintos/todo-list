import React from 'react';
import {checkValue} from '../utils/stringUtils'

export class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            bussiness: "",
            place: "",
            country: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleInput(e) {
        e.preventDefault();
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        });
    }

    submit(e){
        e.preventDefault();

        if(
          checkValue(this.state.name) &&
          checkValue(this.state.bussiness) &&
          checkValue(this.state.country) &&
          checkValue(this.state.place)
        ){
          const offer = {
              name: this.state.name,
              bussiness: this.state.bussiness,
              country: this.state.country,
              place: this.state.place
          }
          this.props.addOffer(offer);

          this.setState({
              name: "",
              bussiness: "",
              place: "",
              country: ""
          })
        }else{
          alert("Hay campos sin completar")
        }
        
    }

    render() {
        return (
          <>
          <br />
            <h1>Posiciones laborales</h1>
            <form onSubmit={(e) => this.submit(e)}>
              <br />
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Ingrese nombre del puesto"
                onChange={(e) => this.handleInput(e)}
                value={this.state.name}
              />
              <br />
              <input
                type="text"
                className="form-control"
                id="bussiness"
                name="bussiness"
                placeholder="Ingrese empresa"
                onChange={(e) => this.handleInput(e)}
                value={this.state.bussiness}
              />
              <br />
              <input
                type="text"
                className="form-control"
                id="place"
                name="place"
                placeholder="Ingrese ciudad"
                onChange={(e) => this.handleInput(e)}
                value={this.state.place}
              />
              <br />
              <input
                type="text"
                className="form-control"
                id="country"
                name="country"
                placeholder="Ingrese país"
                onChange={(e) => this.handleInput(e)}
                value={this.state.country}
              />
              <br />
              <button type="submit" className="btn btn-primary btn-block">
                Agregar
              </button>
            </form>
          </>
        );
    }
}