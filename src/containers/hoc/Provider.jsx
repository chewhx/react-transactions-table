import React, { useMemo } from "react";
import { useTable } from "react-table";
import Transactions from "../../assets/Transactions";

import DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "../../components/Columns";
import CATEGORIES from "../../assets/CATEGORIES.json";

import { _sortByDate } from "../../assets/scripts/util";

export default function Provider(props) {
  const data = useMemo(() => _sortByDate(DATA), []);
  const columns = useMemo(() => COLUMNS, []);
  const categories = useMemo(() => CATEGORIES["categories"], []);
  const tableInstance = useTable({ data, columns })
  return (
    <>
      {props.renderChart && props.renderChart(new Transactions(categories, data))}
      {props.renderTable && props.renderTable(tableInstance)}
    </>
  );
}
