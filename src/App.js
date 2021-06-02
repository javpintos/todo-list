import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBarJob } from './components/NavBarJob'
import { MainView } from './views/MainView'
import { OrganizationAdminView } from "./views/OrganizationAdminView";
import { PlaceAdminView } from "./views/PlaceAdminView";
import { CountryAdminView } from "./views/CountryAdminView";
import { JobInfoView } from './views/JobInfoView'
import { OrganizationInfoView } from "./views/OrganizationInfoView";
import { PlaceInfoView } from './views/PlaceInfoView'
import { CountryInfoView } from "./views/CountryInfoView";
import { NotFoundView } from './views/NotFoundView'

const App = () => (
  <div className="App">
    <NavBarJob />
    <div className="container">
      <Switch>
        <Route path="/" exact component={MainView} />
        <Route path="/organizations" exact component={OrganizationAdminView} />
        <Route path="/places" exact component={PlaceAdminView} />
        <Route path="/countries" exact component={CountryAdminView} />
        <Route path="/job/:idJob" exact component={JobInfoView} />
        <Route path="/organization/:idOrganization" exact component={OrganizationInfoView} />
        <Route path="/place/:idPlace" exact component={PlaceInfoView} />
        <Route path="/country/:idCountry" exact component={CountryInfoView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  </div>
);

export default App;
