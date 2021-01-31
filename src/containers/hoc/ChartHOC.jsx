import React, { useMemo } from "react";
import DATA from "../../assets/MOCK_DATA.json";
import CATEGORIES from "../../assets/CATEGORIES.json"
import Transactions from "../../assets/Transactions";

export default function ChartHOC(props) {
  const data = useMemo(() => DATA, []);
  const categories = useMemo(() => CATEGORIES["categories"], []);
  return <>{props.render(new Transactions(categories, data))}</>;
}
