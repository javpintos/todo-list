import React from 'react'
import {
  createOrganization,
  deleteOrganization,
  getAllCountries,
  getAllPlaces,
  getAllOrganizations,
} from "../app/rest/backend";
import { OrganizationForm } from '../components/OrganizationForm'
import { OrganizationList } from '../components/OrganizationList'

const style = {
    paddingTop: "30px"
}
export class OrganizationAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: [],
      places: [],
      countries: [],
      withError: false,
    };
  }

  componentDidMount() {
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

  addOrganization = (job) => {
    createOrganization(job).then((createdOrganization) => {
      let place = this.state.places.find(
        (place) => place.id === createdOrganization.placeId
      );

      createdOrganization.place = place;

      this.setState({
        organizations: [...this.state.organizations, createdOrganization],
      });
    });
  };

  removeOrganization = (idOrganization) => {
    deleteOrganization(idOrganization).then((id) => {
      const newArr = this.state.organizations.filter(
        (organization) => organization.id !== id
      );
      this.setState({
        organizations: newArr,
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
            <OrganizationForm
              places={this.state.places}
              addOrganization={this.addOrganization}
            />
          </div>
          <div className="col">
            <OrganizationList
              organizations={this.state.organizations}
              onDelete={this.removeOrganization}
            />
          </div>
        </div>
      </>
    );
  }
}