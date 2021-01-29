import React, { useMemo } from "react";
import { useTable } from "react-table";

import DATA from "../assets/MOCK_DATA.json";
import { COLUMNS } from "./Columns";

export default function Table() {
  //memoise data(json) and columns(js function which returns schema)
  //the variable must be "columns" and not anything else
  const data = useMemo(() => DATA, []);
  const columns = useMemo(() => COLUMNS, []);

  //destructure tableInstance
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    allColumns,
    state,
  } = useTable({ data, columns });

  const newRows = rows.slice(0, 100);

  return (
    <div className="container">
      <table className="table table-sm table-striped" {...getTableProps()}>
        <thead className="table-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {newRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td key={cell.column.id} {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
