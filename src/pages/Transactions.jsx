import React from "react";
import TableHOC from "../containers/hoc/TableHOC";
import Table from "../layout/Table/Table";

export default function Transactions() {
  return (
    <TableHOC
      render={(props) => <Table {...props} />}
    />
  );
}
