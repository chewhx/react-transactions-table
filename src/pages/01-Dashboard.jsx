import React from "react";

import TableHOC from "../containers/hoc/TableHOC";
import ChartHOC from "../containers/hoc/ChartHOC";
import BarTwo from "../containers/chartjs/BarTwo";
import BarOne from "../containers/chartjs/BarOne";
import CardOne from "../layout/Card/CardOne";
import Table from "../layout/Table/Table";

import Provider from "../containers/hoc/Provider"

import { format$ } from "../assets/scripts/util";

function Dashboard() {
  return (
    <>
      <Provider
        renderChart={({
          expensesByMonth,
          incomeByMonth,
          expensesRecentMonths,
          incomeRecentMonths,
        }) => (
          <>
            <div className="card-group">
              <CardOne
                cardTitle="Expenses-Overview"
                chartTitle="Past Six Months"
                data={expensesRecentMonths}
              />

              <CardOne
                cardTitle="Income-Overview"
                chartTitle="Past Six Months"
                data={incomeRecentMonths}
              />
            </div>
            <BarTwo
              title="2020 By Month"
              expensesByMonth={expensesByMonth}
              incomeByMonth={incomeByMonth}
              forExpenses
              forIncome
            />
          </>
        )}
      />

      <h2>Most Recent Transactions</h2>
      <Provider renderTable={(props) => <Table mostRecent {...props} />} />
    </>
  );
}

export default Dashboard;
