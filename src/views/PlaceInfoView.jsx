import React from 'react'
import { Link } from "react-router-dom";

export class PlaceInfoView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            country: {
                placeName: "",
                country: {
                    name: ""
                }
            }
        }
    }

    componentDidMount(){
        const { idPlace } = this.props.match.params
        const country = JSON.parse(localStorage.getItem("places"))[idPlace]
        
        this.setState({
            country: country
        })
    }
    
    
    render(){
        const { placeName, country: { name } } = this.state.country 
        return (
          <>
            <h1>Vista de información de Lugar</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">País</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{placeName}</td>
                  <td>{name}</td>
                </tr>
              </tbody>
            </table>
            <Link className="btn btn-primary" to="/places">
              Volver
            </Link>
          </>
        );
    }
    
}