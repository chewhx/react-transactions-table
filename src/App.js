import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import SideBar from "./layout/Nav/SideBar";
import Main from "./layout/Main/Main";

import Dashboard from "./pages/01-Dashboard";
import Transactions from "./pages/02-Transactions";
import Income from "./pages/03-Income";
import Expenses from "./pages/04-Expenses";
import ExpensesByCategory from "./pages/05-ExpensesByCategory";

function App() {
  return (
    <>
      <SideBar />
      <Main>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/transactions" component={Transactions} />
          <Route exact path="/income" component={Income} />
          <Route exact path="/expenses" component={Expenses} />
          <Route exact path="/expensesbycat" component={ExpensesByCategory} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Main>
    </>
  );
}

export default App;
