import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClinicalServices from "../pages/ClinicalServices";
import Home from "../pages/Home";
import Patient from "../pages/Patient";
import Patients from "../pages/Patients";
import Quote from "../pages/Quote";
import Quotes from "../pages/Quotes";
import Service from "../pages/Service";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/clinical-services" component={ClinicalServices} exact />
        <Route path="/quotes" component={Quotes} exact />
        <Route path="/quote/:id" component={Quote} exact />
        <Route path="/service/:id" exact component={Service} />
        <Route path="/patients" exact component={Patients} />
        <Route path="/patient/:id" exact component={Patient} />
      </Switch>
    </Router>
  );
}