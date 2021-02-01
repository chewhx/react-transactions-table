import React from "react";
import Provider from "../containers/hoc/Provider"
import Table from "../layout/Table/Table";

export default function Transactions() {
  return <Provider renderTable={(props) => <Table {...props} />} />;
}
