import React from 'react'
import { PlaceForm } from '../components/PlaceForm'
import { PlaceList } from '../components/PlaceList'

const style = {
    paddingTop: "30px"
}

export class PlaceAdminView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("places") != null) {
      this.setState({
        places: JSON.parse(localStorage.getItem("places")),
      });
    }
  }

  addPlace = (place) => {
    this.setState({
      places: [...this.state.places, place],
    });
  };

  deletePlace = (indexPlace) => {
    const newArr = this.state.places.filter((_, index) => index !== indexPlace);

    this.setState({
      places: newArr,
    });
  };

  saveData = () => {
    window.localStorage.setItem(
      "places",
      JSON.stringify(this.state.places)
    );
  };

  render() {
    return (
      <div className="row" style={style}>
        <div className="col">
          <PlaceForm addPlace={this.addPlace} />
        </div>
        <div className="col">
          <PlaceList places={this.state.places} 
          onDelete={this.deletePlace} />
        </div>
      </div>
    );
  }
}