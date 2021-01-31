import React from "react";

import TableHOC from "../containers/hoc/TableHOC";
import ChartHOC from "../containers/hoc/ChartHOC";
import BarTwo from "../containers/chartjs/BarTwo";
import BarOne from "../containers/chartjs/BarOne";
import Table from "../layout/Table/Table";

import { format$ } from "../assets/scripts/util";

function Dashboard() {
  return (
    <>
      <ChartHOC
        render={({ expensesByMonth, incomeByMonth, expensesRecentMonths }) => (
          <>
            <div className="card" style={{ width: "33%" }}>
              <h5 className="card-header">Expenses</h5>
              <div className="card-body">
                <BarOne
                  title="Past Six Months"
                  data={expensesRecentMonths}
                  labels={["Dec", "Nov", "Oct", "Sep", "Aug", "Jul"]}
                />
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <ul className="list-group list-group-flush">
                  {Object.keys(expensesRecentMonths).map((e) => (
                    <li className="list-group-item">
                      {e} — {format$(expensesRecentMonths[e])}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
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
      <TableHOC render={(props) => <Table mostRecent {...props} />} />
    </>
  );
}

export default Dashboard;
