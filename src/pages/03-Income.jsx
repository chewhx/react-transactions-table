import React from "react";
import TableHOC from "../containers/hoc/TableHOC";
import Table from "../layout/Table/Table";
import ChartHOC from "../containers/hoc/ChartHOC";

import { format$ } from "../assets/scripts/util";

export default function Income() {
  return (
    <>
      <ChartHOC
        render={({ incomeTotal }) => <h2>2020 - {format$(incomeTotal)}</h2>}
      />
      <TableHOC render={(props) => <Table incomeOnly {...props} />} />;
    </>
  );
}
