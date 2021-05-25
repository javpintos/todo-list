import React from 'react'
import { Redirect } from 'react-router-dom'


export class NotFoundView extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isRedirect : false
        }
    }

    redirectToHome = () => {
        this.setState({
            isRedirect: true
        })
    }

    render(){
        return(
            <>
                <button onClick={this.redirectToHome}>Volver a la home</button>
                { this.state.isRedirect ? <Redirect to="/" /> : <p>Pagina no encontrada</p> }
            </>
        )
    }
}