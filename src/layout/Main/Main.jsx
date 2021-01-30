import React from "react";
import { useLocation } from "react-router-dom";

export default function Main(props) {
  const { pathname } = useLocation();

  let pageTitle = "Dashboard";

  switch (pathname) {
    case "/dashboard":
      pageTitle = "Dashboard";
      break;

    case "/transactions":
      pageTitle = "Transactions";
      break;

    default:
      break;
  }

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>{pageTitle}</h1>
      </div>
      {props.children}
    </main>
  );
}
