import React from "react";
import PropTypes from 'prop-types'

import BarOne from "../../containers/chartjs/BarOne";
import LineSm from "../../containers/chartjs/LineSm";
import BarSm from '../../containers/chartjs/BarSm'  

import { format$ } from "../../assets/scripts/util";

export default function CardOne(props) {
  const {cardTitle, cardSubtitle, variant, lineChart, barChart, ...rest} = props;
  return (
    <div className={`card text-white mx-1 my-1 bg-${props.variant}`} style={{ width: "16rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <h6 className="card-subtitle mb-2">{props.cardSubtitle}</h6>
        {lineChart && <LineSm data={props.data} variant={props.variant} {...rest} />}
        {barChart && <BarSm data={props.data} variant={props.variant} {...rest} />}
      </div>
    </div>
  );
}

CardOne.propTypes = {
  cardTitle: PropTypes.string.isRequired,
  cardSubtitle: PropTypes.string.isRequired,
  variant: PropTypes.string,
}

CardOne.defaultProps = {
  variant: "primary",
}