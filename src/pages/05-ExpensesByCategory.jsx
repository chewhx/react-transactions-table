import React from "react";
import ChartHOC from "../containers/hoc/ChartHOC";
import Pie from "../containers/chartjs/Pie";
import TableStatic from '../layout/Table/TableStatic'

import CATEGORIES from "../assets/CATEGORIES.json";
import { format$ } from "../assets/scripts/util";

export default function ExpensesByCategory() {
  const categories = CATEGORIES["categories"];

  return (
    <>
      <ChartHOC
        render={({ expensesByCategory, expensesTopFive }) => {
          return (
            <>
              <Pie
                title="Expenses By Category"
                expensesByCategory={expensesByCategory}
              />
              <TableStatic format$ title="Top Five Expenses Category" datum={expensesTopFive} />
              {Object.keys(expensesByCategory).map((key) => (
                <p>
                  {categories[key]}: {format$(expensesByCategory[key])}
                </p>
              ))}
            </>
          );
        }}
      />
    </>
  );
}
