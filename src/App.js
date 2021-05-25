import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBarToDo } from './components/NavBarToDo'
import { MainView } from './views/MainView'
import { OfferInfoView } from './views/OfferInfoView'
import { BusinessAdminView } from './views/BusinessAdminView'
import { BusinessInfoView } from './views/BusinessInfoView'
import { PlaceAdminView } from './views/PlaceAdminView'
import { PlaceInfoView } from './views/PlaceInfoView'
import { CountryAdminView } from './views/CountryAdminView'
import { CountryInfoView } from './views/CountryInfoView'
import { NotFoundView } from './views/NotFoundView'

const App = () => (
  <div className="App">
    <NavBarToDo />
    <div className="container">
      <Switch>
        <Route path="/" exact component={MainView} />
        <Route path="/businesses" exact component={BusinessAdminView} />
        <Route path="/countries" exact component={CountryAdminView} />
        <Route path="/places" exact component={PlaceAdminView} />
        <Route path="/offer/:idOffer" exact component={OfferInfoView} />
        <Route path="/business/:idBusiness" exact component={BusinessInfoView} />
        <Route path="/country/:idCountry" exact component={CountryInfoView} />
        <Route path="/place/:idPlace" exact component={PlaceInfoView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  </div>
)

export default App;
