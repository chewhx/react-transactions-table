import React from "react";

export default function Table({
  //----Table props-----
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  //----Dev props-----
  mostRecent,
  incomeOnly,
  expensesOnly,
}) {
  const editedRows = mostRecent
    ? rows.slice(0, 10)
    : incomeOnly
    ? rows.filter((row) => row["values"]["credit"] != null)
    : expensesOnly
    ? rows.filter((row) => row["values"]["debit"] != null)
    : rows;
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
          {editedRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td key={cell.column.id} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
