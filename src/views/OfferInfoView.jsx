import React from 'react'
import { Link } from "react-router-dom";

export class OfferInfoView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
          offer: {
            title: "",
            business: {
              businessName: "",
              place: {
                placeName: "",
                country: {
                  name: "",
                },
              },
            },
          },
        };
    }

    componentDidMount(){
        const { idOffer } = this.props.match.params
        const offer = JSON.parse(localStorage.getItem("offers"))[idOffer]
        
        this.setState({
            offer: offer
        })
    }
    
    render(){
        const {
          title,
          business: { businessName },
          business: {
            place: { placeName },
          },
          business: {
            place: {
              country: { name },
            },
          },
        } = this.state.offer; 
        return (
          <>
            <h1>Vista de información de Oferta Laboral</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                  <th scope="col">Empresa</th>
                  <th scope="col">Lugar</th>
                  <th scope="col">País</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{title}</td>
                  <td>{businessName}</td>
                  <td>{placeName}</td>
                  <td>{name}</td>
                </tr>
              </tbody>
            </table>
            <Link className="btn btn-primary" to="/">
              Volver
            </Link>
          </>
        );
    }
}