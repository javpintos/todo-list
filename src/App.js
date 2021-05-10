import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NavBarToDo } from './components/NavBarToDo'
import { MainView } from './views/MainView'
import { CountryAdminView } from './views/CountryAdminView'
import { CityAdminView } from './views/CityAdminView'
import { BusinessAdminView } from './views/BusinessAdminView'
import { NotFoundView } from './views/NotFoundView'

const App = () => (
    <div className="App">
    <NavBarToDo />
    <div className="container">
      <Switch>
        <Route path="/" exact component={MainView} />
        <Route path="/countries" exact component={CountryAdminView} />
        <Route path="/cities" exact component={CityAdminView} />
        <Route path="/business" exact component={BusinessAdminView} />
        <Route component={NotFoundView} />
      </Switch>
    </div>
  </div>
)

export default App;
