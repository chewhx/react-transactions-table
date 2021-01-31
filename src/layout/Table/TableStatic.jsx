import React from "react";
import PropTypes from "prop-types";

import { format$ } from "../../assets/scripts/util";

export default function TableStatic(props) {
  return (
    <table className="table table-sm table-striped">
      <thead className="table-dark">
        <tr>
          <td colSpan="2">{props.title}</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.datum).map((e) => (
          <tr>
            <td>{e}</td>
            <td>{props.format$ ? format$(props.datum[e]) : props.datum[e]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//set proptypes and default props
TableStatic.propTypes = {
  title: PropTypes.string.isRequired,
  datum: PropTypes.object.isRequired,
  format$: PropTypes.bool,
};
