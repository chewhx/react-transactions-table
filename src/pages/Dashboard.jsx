import React, { useMemo } from "react";
import { useTable } from "react-table";
import DATA from "../assets/MOCK_DATA.json";
import { COLUMNS } from "../components/Columns";

import Transactions from "../assets/Transactions";

import ChartHOC from "../containers/hoc/ChartHOC";
import Bar from "../containers/chartjs/Bar";

function Dashboard() {
  return (
    <ChartHOC
      render={({ expensesByMonth, incomeByMonth }) => (
        <Bar
          title="2020 By Month"
          expensesByMonth={expensesByMonth}
          incomeByMonth={incomeByMonth}
        />
      )}
    />
  );
}

export default Dashboard;
