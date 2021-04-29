import React from 'react';

export class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombrePuesto: "",
            empresa: "",
            ciudad: "",
            pais: ""
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

        const item = {
            nombrePuesto: this.state.nombrePuesto,
            empresa: this.state.empresa,
            pais: this.state.pais,
            ciudad: this.state.ciudad
        }
        this.props.onSubmit(item)

        this.setState({
            nombrePuesto: "",
            empresa: "",
            ciudad: "",
            pais: ""
        })
        
    }

    render() {
          return (
            <div>
              <h1>Puestos laborales</h1>
              <hr />
              <form onSubmit={(e) => this.submit(e)}>
                <div className="form-group">
                  <label>Nombre del puesto</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="nombrePuesto"
                    name="nombrePuesto"
                    placeholder="Ingrese Nombre del puesto"
                    required
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.nombrePuesto}
                  />
                  <br />

                  <label>Empresa</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="empresa"
                    name="empresa"
                    placeholder="Ingrese Empresa"
                    required
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.empresa}
                  />
                  <br />

                  <label>Ciudad</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="ciudad"
                    name="ciudad"
                    placeholder="Ingrese Ciudad"
                    required
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.ciudad}
                  />
                  <br />

                  <label>País</label>
                  <br />
                  <input
                    type="text"
                    className="form-control"
                    id="pais"
                    name="pais"
                    placeholder="Ingrese País"
                    required
                    onChange={(e) => this.handleInput(e)}
                    value={this.state.pais}
                  />
                  <br />

                  <button type="submit" className="btn btn-primary">
                    Agregar
                  </button>
                </div>
              </form>
            </div>
          );
    }
}