import React, { useMemo } from "react";
import DATA from "../../assets/MOCK_DATA.json";
import Transactions from "../../assets/Transactions";

export default function ChartHOC(props) {
  const data = useMemo(() => DATA, []);
  return <>{props.render(new Transactions(2020, data))}</>;
}
