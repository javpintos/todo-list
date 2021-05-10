import React from "react";
import { BusinessForm } from "../components/BusinessForm";

export class BusinessAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      businesss: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("businesss") != null) {
      this.setState({
        businesss: JSON.parse(localStorage.getItem("businesss")),
      });
    }
  }

  addBusiness = (business) => {
    this.setState({
      businesss: [...this.state.businesss, business],
    });
  };

  saveData = () => {
    window.localStorage.setItem("businesss", JSON.stringify(this.state.businesss));
  };

  render() {
    return (
      <div>
        <BusinessForm addBusiness={this.addBusiness} />
        <button onClick={this.saveData} className="btn btn-warning">
          Guardar
        </button>
      </div>
    );
  }
}
