import { getMonth } from "date-fns";
import { _sum } from "./scripts/util";

function rows(n) {
  let arr = {};
  for (let i = 0; i <= n; i++) {
    arr[i] = 0;
  }
  return arr;
}

function nestedRows(n1, n2) {
  let arr = {};
  for (let i = 0; i <= n1; i++) {
    arr[i] = {};
    for (let u = 0; u <= n2; u++) {
      arr[i][u] = 0;
    }
  }
  return arr;
}

export default class Transactions {
  constructor(categories, data) {
    this.categories = categories;
    this.data = data;
    this.months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    //declare expenses and income
    this.expenses = { ...nestedRows(11, 27) };
    this.income = { ...nestedRows(11, 27) };
    this.expensesByCategory = { ...rows(27) };
    this.incomeByCategory = { ...rows(27) };
    this.expensesByMonth = { ...rows(11) };
    this.incomeByMonth = { ...rows(11) };

    //assign expenses and income
    this.data.map((e) => {
      const month = getMonth(new Date(e.date));
      const category = e.category;
      this.expenses[month][category] += e.debit;
      this.expensesByMonth[month] += e.debit;
      this.expensesByCategory[category] += e.debit;
      this.income[month][category] += e.credit;
      this.incomeByMonth[month] += e.credit;
      this.incomeByCategory[category] += e.credit;
    });

    //
    this.expensesTotal = _sum(Object.values(this.expensesByMonth));
    this.incomeTotal = _sum(Object.values(this.incomeByMonth));

    this.expensesTopFive = this.getTopFive(this.expensesByCategory);
    this.incomeTopFive = this.getTopFive(this.incomeByCategory);

    this.expensesRecentMonths = this.getRecentMonths(this.expensesByMonth);
  } //constructor

  getTopFive(obj) {
    const obj_ = obj
    const toArr = Object.entries(obj_).map(([key, val]) => [
      this.categories[key],
      val,
    ]);
    const sortArr = toArr.sort((a, b) => b[1] - a[1]);
    const slicedArr = sortArr.slice(0, 5);
    const rest = sortArr.slice(5, slicedArr.length);
    return Object.fromEntries(slicedArr);
  }

  getRecentMonths(obj) {
    const obj_ = {}
    for (let i = 6; i <= 11; i++) {
      obj_[i] = obj[i];
    }
    return this.mapMonths(obj_);
  }

  mapMonths(obj) {
    const obj_ = obj
    const toArr = Object.entries(obj_)
    const sortArr = toArr.sort((a, b) => b[0] - a[0]);
    const mapArr = sortArr.map(([key, val]) => [this.months[key], val]);
    const toObj = Object.fromEntries(mapArr)
    return toObj
  }
} //class
