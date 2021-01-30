import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <NavLink className="nav-link" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/transactions">
            Transactions
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/#">
            Income
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/#">
            Expenses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/#">
            Expenses By Category
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
