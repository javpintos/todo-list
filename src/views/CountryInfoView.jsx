import React from 'react'
import { Link } from "react-router-dom";

export class CountryInfoView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name: ""
        }
    }

    componentDidMount(){
        const { idCountry } = this.props.match.params
        const name = JSON.parse(localStorage.getItem("countries"))[idCountry]
        
        this.setState({
            name: name
        })
    }
    
    
    render(){
        const { name } = this.state.name 
        return (
          <>
            <h1>Vista de información de País</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Nombre</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{name}</td>
                </tr>
              </tbody>
            </table>
            <Link className="btn btn-primary" to="/countries">
              Volver
            </Link>
          </>
        );
    }
    
}