import React from 'react'
import { Link } from "react-router-dom";

export class BusinessInfoView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          business: {
            businessName: "",
            place: {
              placeName: "",
              country: {
                name: "",
              },
            },
          },
        };
    }

    componentDidMount(){
        const { idBusiness } = this.props.match.params
        const business = JSON.parse(localStorage.getItem("businesses"))[idBusiness]
        
        this.setState({
            business: business
        })
    }
    
    
    render(){
        const {
          businessName,
          place: { placeName },
          place: {
            country: { name },
          },
        } = this.state.business; 
        return (
          <>
            <h1>Vista de información de Empresa</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Ciudad</th>
                  <th scope="col">País</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{businessName}</td>
                  <td>{placeName}</td>
                  <td>{name}</td>
                </tr>
              </tbody>
            </table>
            <Link className="btn btn-primary" to="/businesses">
              Volver
            </Link>
          </>
        );
    }
    
}