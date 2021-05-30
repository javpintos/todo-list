import React from "react";
import { Redirect } from "react-router-dom";

export class JobList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isRedirect: false,
			index: "",
		};
	}

	toInfoJob = (index) => {
		this.setState({
			isRedirect: true,
			index: index,
		});
	};

	render() {
		if (this.state.isRedirect) {
			return <Redirect to={`/job/${this.state.index}`} />;
		} else {
			return (
        <>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Posición</th>
                <th scope="col">Descripción</th>
                <th scope="col">Empresa</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {this.props.jobs.map((job) => (
                <tr key={job.id}>
                  <th scope="row">{job.id}</th>
                  <td>{job.position}</td>
                  <td>{job.description}</td>
                  <td>{job.organizationId}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => this.toInfoJob(job.id)}
                    >
                      Ver
                    </button>

                    <button
                      type="button"
                      className="btn btn-success"
                    >
                      Modificar
                    </button>

                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.props.onDelete(job.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      );
		}
	}
}
