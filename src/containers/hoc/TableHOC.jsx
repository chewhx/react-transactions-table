import React, { useMemo } from "react";
import { useTable } from "react-table";
import DATA from "../../assets/MOCK_DATA.json";
import { COLUMNS } from "../../components/Columns";

function TableHOC(props) {
  const data = useMemo(() => DATA, []);
  const columns = useMemo(() => COLUMNS, []);
  return <>{props.render(useTable({ data, columns }))}</>;
}

export default TableHOC;
