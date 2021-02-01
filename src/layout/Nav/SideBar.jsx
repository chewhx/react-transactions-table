import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  const activeStyle = {
    color: "black",
  };
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink activeStyle={activeStyle} className="nav-link" to="/dashboard">
            <i class="bi bi-clipboard"></i> Dashboard{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={activeStyle} className="nav-link" to="/transactions">
            <i class="bi bi-table"></i> Transactions{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={activeStyle} className="nav-link" to="/income">
            <i class="bi bi-cash-stack"></i> Income{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={activeStyle} className="nav-link" to="/expenses">
            <i class="bi bi-receipt"></i> Expenses{" "}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={activeStyle} className="nav-link" to="/expensesbycat">
            <i class="bi bi-pie-chart"></i> Expenses By Category{" "}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
