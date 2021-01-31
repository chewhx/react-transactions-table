import React from "react";
import TableHOC from "../containers/hoc/TableHOC";
import Table from "../layout/Table/Table";
import Provider from "../containers/hoc/Provider"

export default function Transactions() {
  return <Provider renderTable={(props) => <Table {...props} />} />;
}
