import { format } from "date-fns";
import { format$ } from '../assets/scripts/util'
import CATEGORIES from "../assets/CATEGORIES.json";

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
    Cell: ({value}) => {
      return String(CATEGORIES["categories"][value])
    },
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
