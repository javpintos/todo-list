import React from 'react'
import { OfferForm } from '../components/OfferForm'
import { OfferList } from '../components/OfferList'

const style = {
    paddingTop: "30px"
}

export class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem("offers") != null) {
      this.setState({
        offers: JSON.parse(localStorage.getItem("offers")),
      });
    }
  }

  addOffer = (offer) => {
    this.setState({
      offers: [...this.state.offers, offer],
    });
  };

  deleteOffer = (indexOffer) => {
    const newArr = this.state.offers.filter((_, index) => index !== indexOffer);

    this.setState({
      offers: newArr,
    });
  };

  saveData = () => {
    window.localStorage.setItem(
      "offers",
      JSON.stringify(this.state.offers)
    );
  };

  render() {
    return (
      <div className="row" style={style}>
        <div className="col">
          <OfferForm addOffer={this.addOffer} />
        </div>
        <div className="col">
          <OfferList offers={this.state.offers} onDelete={this.deleteOffer} />
        </div>
      </div>
    );
  }
}