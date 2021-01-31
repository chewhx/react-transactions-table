import React from "react";
import BarOne from "../../containers/chartjs/BarOne";

import { format$ } from "../../assets/scripts/util";

export default function CardOne(props) {
  return (
    <div className="card" style={{ width: "33%" }}>
      <h5 className="card-header">{props.cardTitle}</h5>
      <div className="card-body">
        <BarOne
          title={props.chartTitle}
          data={props.data}
          labels={Object.keys(props.data)}
        />
        <ul className="list-group list-group-flush">
          {Object.keys(props.data).map((e) => (
            <li className="list-group-item list-group-item-action">
              {e} — {format$(props.data[e])}
            </li>
          ))}
        </ul>
        <a href="#" className="btn btn-primary">
          See more
        </a>
      </div>
    </div>
  );
}
