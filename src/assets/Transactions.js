import { getMonth } from 'date-fns';

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

function sumAll(arr) {
  arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

export default class Transactions {
  constructor(year, data) {
    this.year = year;
    this.data = data;

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
      this.expensesByMonth[month] += e.debit
      this.expensesByCategory[category] += e.debit
      this.income[month][category] += e.credit;
      this.incomeByMonth[month] += e.credit
      this.incomeByCategory[category] += e.credit
    });
    

  } //constructor

} //class