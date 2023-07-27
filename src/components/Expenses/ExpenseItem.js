// import React from "react";
// import "./ExpenseItem.css";
// import ExpenseDate from "./ExpenseDate";
// export default function ExpenseItem(props) {
//   return (
//     <div className="expense-item">
//       <div>
//         <ExpenseDate date={props.date} />
//       </div>
//       <div className="expense-item__description">
//         <h2>{props.title}</h2>
//         <div className="expense-item__price">${props.amount}</div>
//       </div>
//     </div>
//   );
// }

import React from "react";

import ExpenseDate from "./ExpenseDate";
// import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;
