import React from "react";
import { HomePage } from './pages/HomePage';
import { ListTripsPage } from './pages/ListTripsPage';
import { ApplicationFormPage } from './pages/ApplicationFormPage';
import { LoginPage } from './pages/LoginPage';
import { AdminHomePage } from "./pages/AdminHomePage";
import { TripDetailsPage } from "./pages/TripDetailsPage";
import { CreateTripPage } from './pages/CreateTripPage';
import { BrowserRouter, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Switch>
      {/* <div> */}
      <Route exact path={"/"}>
        <HomePage/>
      </Route>

      <Route exact path= {"/ListTrips"}>
        <ListTripsPage/>
      </Route>

      <Route exact path= {"/ApplicationForm"}>
        <ApplicationFormPage/>
      </Route>

      <Route exact path= {"/Login"}>
        <LoginPage/>
      </Route>

      <Route exact path= {"/Login"}>
        <LoginPage/>
      </Route>

      <Route exact path= {"/Adm"}>
        <AdminHomePage/>
      </Route>

      <Route exact path= {"/TripDetails"}>
        <TripDetailsPage/>
      </Route>

      <Route exact path= {"/CreateTrip"}>
        <CreateTripPage/>
      </Route>

      {/* </div> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
