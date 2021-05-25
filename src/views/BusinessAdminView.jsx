import React from 'react'
import { BusinessForm } from '../components/BusinessForm'
import { BusinessList } from "../components/BusinessList";

const style = {
  paddingTop: "30px",
};

export class BusinessAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesses: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("businesses") != null) {
      this.setState({
        businesses: JSON.parse(localStorage.getItem("businesses")),
      });
    }
  }

  addBusiness = (business) => {
    this.setState({
      businesses: [...this.state.businesses, business],
    });
  };

  deleteBusiness = (indexBusiness) => {
    const newArr = this.state.businesses.filter(
      (_, index) => index !== indexBusiness
    );

    this.setState({
      businesses: newArr,
    });
  };

  saveData = () => {
    window.localStorage.setItem(
      "businesses",
      JSON.stringify(this.state.businesses)
    );
  };

  render() {
    return (
      <div className="row" style={style}>
        <div className="col">
          <BusinessForm addBusiness={this.addBusiness} />
        </div>
        <div className="col">
          <BusinessList
            businesses={this.state.businesses}
            onDelete={this.deleteBusiness}
          />
        </div>
      </div>
    );
  }
}