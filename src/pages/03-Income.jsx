import React from "react";
import TableHOC from "../containers/hoc/TableHOC";
import Table from "../layout/Table/Table";
import Provider from "../containers/hoc/Provider";

import { format$ } from "../assets/scripts/util";

export default function Income() {
  return (
    <>
      <Provider
        renderChart={({ incomeTotal }) => <h2>2020 - {format$(incomeTotal)}</h2>}
      />
      <Provider renderTable={(props) => <Table incomeOnly {...props} />} />;
    </>
  );
}
