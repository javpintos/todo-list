import React from 'react'
import { Link } from "react-router-dom";
import { getJob } from '../app/rest/backend'

export class JobInfoView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            job: {
                position: "",
                description: "",
                organizationId: ""
            },
            withError: false
        }
    }

    componentDidMount(){
        const { idJob } = this.props.match.params
        getJob(idJob)
            .then(job => this.setState({
                job: job
            }))
            .catch(() => this.setState({
                withError: true
            }))      
    }
    
    
    render(){
        const {
          position,
          description,
          organizationId,
        } = this.state.job; 
        return (
          <>
            {this.state.withError && (
              <div className="row">
                <div className="alert alert-danger" role="alert">
                  No se encuentra la información solicitada
                </div>
              </div>
            )}
            <h1>Vista de Puesto Laboral</h1>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Título</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Empresa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{position}</td>
                  <td>{description}</td>
                  <td>{organizationId}</td>
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