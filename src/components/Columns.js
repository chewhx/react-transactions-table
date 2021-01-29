import { format } from "date-fns";

const format$ = (number) =>
  number === null
    ? "-"
    : new Intl.NumberFormat("en-SG", {
        style: "currency",
        currency: "SGD",
      }).format(number);

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Date",
    accessor: "date",
    Cell: ({ value }) => {
      return format(new Date(value), "yyyy-MM-dd");
    },
  },
  {
    Header: "Trans Code",
    accessor: "transaction_code",
  },
  {
    Header: "Payee",
    accessor: "payee",
  },
  {
    Header: "Category",
    accessor: "category",
  },
  {
    Header: "Withdrawal",
    accessor: "debit",
    Cell: ({ value }) => {
      return format$(value);
    },
  },
  {
    Header: "Deposit",
    accessor: "credit",
    Cell: ({ value }) => {
      return format$(value);
    },
  },
];
