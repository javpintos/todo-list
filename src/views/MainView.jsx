import React from "react";
import {
	createJob,
	deleteJob,
	getAllCountries,
	getAllPlaces,
	getAllOrganizations,
	getAllJobs,
} from "../app/rest/backend";
import { JobForm } from "../components/JobForm";
import { JobList } from "../components/JobList";

const style = {
	paddingTop: "30px",
};
export class MainView extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobs: [],
			organizations: [],
			places: [],
			countries: [],
			withError: false,
		};
	}

	componentDidMount() {
		getAllJobs()
			.then((jobs) =>
				this.setState({
					jobs: jobs,
				})
			)
			.catch(() =>
				this.setState({
					withError: true,
				})
			);

		getAllOrganizations()
			.then((organizations) =>
				this.setState({
					organizations: organizations,
				})
			)
			.catch(() =>
				this.setState({
					withError: true,
				})
			);

		getAllPlaces()
			.then((places) =>
				this.setState({
					places: places,
				})
			)
			.catch(() =>
				this.setState({
					withError: true,
				})
			);

		getAllCountries()
			.then((countries) =>
				this.setState({
					countries: countries,
				})
			)
			.catch(() =>
				this.setState({
					withError: true,
				})
			);
	}

	addJob = (job) => {
		createJob(job).then((createdJob) => {
			let organization = this.state.organizations.find(organization => 
				organization.id === createdJob.organizationId
			)

			createdJob.organization = organization

			this.setState({
				jobs: [...this.state.jobs, createdJob],
			});
		});
	};

	removeJob = (idJob) => {
		deleteJob(idJob).then((id) => {
			const newArr = this.state.jobs.filter((job) => job.id !== id);
			this.setState({
				jobs: newArr,
			});
		});
	};

	render() {
		return (
			<>
				{this.state.withError && (
					<div className="row" style={style}>
						<div className="alert alert-danger" role="alert">
							No se pudieron obtener datos desde el servidor
						</div>
					</div>
				)}
				<div className="row" style={style}>
					<div className="col">
						<JobForm
							organizations={this.state.organizations}
							addJob={this.addJob}
						/>
					</div>
					<div className="col">
						<JobList
							jobs={this.state.jobs}
							onDelete={this.removeJob}
						/>
					</div>
				</div>
			</>
		);
	}
}
