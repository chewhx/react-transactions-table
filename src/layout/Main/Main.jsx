import React from "react";
import { useLocation } from "react-router-dom";

import { _fixPathname } from "../../assets/scripts/util";

export default function Main(props) {
  const { pathname } = useLocation();

  const match = {
    "/": "Dashboard",
    "/dashboard": "Dashboard",
    "/transactions": "Transactions",
    "/income": "Income",
    "/expenses": "Expenses",
    "/expensesbycat": "Expenses By Category",
  };

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>{match[pathname]}</h1>
      </div>
      {props.children}
    </main>
  );
}
