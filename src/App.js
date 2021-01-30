import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import SideBar from "./layout/Nav/SideBar";
import Main from "./layout/Main/Main";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

function App() {
  return (
    <>
      <SideBar />
      <Main>
        <Switch>
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
