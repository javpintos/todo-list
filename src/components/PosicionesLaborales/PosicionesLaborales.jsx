import React from 'react'

export class PosicionesLaborales extends React.Component {
    constructor(props){
        super (props)
        this.props = props
        this.state = {
            inputValue : "",
            items: ["Desarrollador JS, Empresa ABC, La Rioja, Argentina", "Desarrollador Java, Empresa DEF, Madrid, España", "Desarrollador PHP, Empresa GHI, Berlin, Alemania"]
        }
    }

     addItem(item){
        this.setState({
            items: [...this.state.items, item]//... sprite operator: trae todos los elementos que ya tiene el arreglo original para actualizarlo y no sobreescribirlo
        })
     }

    handleInput(event){
        this.setState({
            inputValue: event.target.value
        })
    }

    render(){
        return (
          <div class="container">
            <h1>Posiciones laborales</h1>

            <hr></hr>

            <form>
              <div class="form-group">
                <label for="nombrePuesto">Nombre del puesto</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="nombrePuesto"
                  name="nombrePuesto"
                  placeholder="Ingrese Nombre del puesto"
                  required="true"
                />
                <br />

                <label for="empresa">Empresa</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="empresa"
                  name="empresa"
                  placeholder="Ingrese Empresa"
                  required="true"
                />
                <br />

                <label for="ciudad">Ciudad</label>
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="ciudad"
                  name="ciudad"
                  placeholder="Ingrese Ciudad"
                  required="true"
                />
                <br />

                <label for="pais">País</label>
                <br />
                <input
                  value={this.state.inputValue}
                  onChange={(e) => this.handleInput(e)}
                  type="text"
                  class="form-control"
                  id="pais"
                  name="pais"
                  placeholder="Ingrese País"
                  required="true"
                />
                <br />

                <button
                  class="btn btn-primary"
                  onClick={() => this.addItem(this.state.inputValue)}
                >
                  Agregar
                </button>
              </div>
            </form>

            <hr class="my-4"></hr>

            <ul class="list-group">
              {this.state.items.map((item, index) => {
                return (
                  <li key={index} class="list-group-item">
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        );
    }
}