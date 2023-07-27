// import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
// import "./Expenses.css";
// import ExpenseFilter from "./ExpenseFilter";
// export default function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");
//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };
//   return (
//     <div className="expenses">
//       <ExpenseFilter
//         selected={filteredYear}
//         onChangeFilter={filterChangeHandler}
//       />
//       {/* {props.expenses.map((expense) => (
//         <ExpenseItem
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//         />
//       ))} */}
//       <ExpenseItem expenses={props.expenses[0]} />
//       <ExpenseItem expenses={props.expenses[1]} />
//       <ExpenseItem expenses={props.expenses[2]} />
//       <ExpenseItem expenses={props.expenses[3]} />
//     </div>
//   );
// }

import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* {expensesContent} */}
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
