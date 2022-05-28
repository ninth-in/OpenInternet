import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login"
import Mapa from "./Pages/Maps"
import Main from "./Pages/Main"
import Calendar from "./Pages/Calendar/index"
import Account from "./Pages/Account"
import Messeger from "./Pages/Messeger" 

const rootElement = document.getElementById("root");
export default function () {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/mainUser" component={Main} />
        <Route exact path="/mainUser/maps" component={Mapa} />
        <Route exact path="/mainUser/calendar" component={Calendar} />
        <Route exact path="/mainUser/account" component={Account} />
        <Route exact path="/mainUser/messenger" component={Messeger} />
      </Switch>
    </BrowserRouter>
  );
}
