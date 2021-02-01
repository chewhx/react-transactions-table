import React from "react";

import TableHOC from "../containers/hoc/TableHOC";
import ChartHOC from "../containers/hoc/ChartHOC";
import BarTwo from "../containers/chartjs/BarTwo";
import BarOne from "../containers/chartjs/BarOne";
import CardOne from "../layout/Card/CardOne";
import Table from "../layout/Table/Table";

import Provider from "../containers/hoc/Provider";

import { format$, _sum } from "../assets/scripts/util";

function Dashboard() {
  console.log(document.documentElement.style.getPropertyValue("--bs-red"));

  return (
    <>
      <Provider
        renderChart={({
          expensesByMonth,
          incomeByMonth,
          expensesRecentMonths,
          incomeRecentMonths,
          expensesTotal,
          incomeTotal,
        }) => (
          <>
            <div className="row">
              <CardOne
                cardTitle={format$(expensesTotal)}
                cardSubtitle="Expenses"
                data={expensesByMonth}
                variant="warning"
                lineChart
                chartHideTitle
                chartLight
              />

              <CardOne
                cardTitle={format$(incomeTotal)}
                cardSubtitle="Income"
                data={incomeByMonth}
                variant="success"
                lineChart
                chartHideTitle
                chartLight
              />

              <CardOne
                cardTitle={format$(_sum(Object.values(expensesRecentMonths)))}
                cardSubtitle="Expenses Past Six Months"
                data={expensesRecentMonths}
                variant="info"
                barChart
                chartHideTitle
                chartLight
              />

              <CardOne
                cardTitle={format$(_sum(Object.values(incomeRecentMonths)))}
                cardSubtitle="Income Past Six Months"
                data={incomeRecentMonths}
                variant="danger"
                barChart
                chartHideTitle
                chartLight
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
