// import React, { useState } from "react";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const expenseDate = new Date(2021, 9, 19);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = "300.00";
  // const month = props.date.toLocaleString("en-US", { month: 'long' });
  // const day = props.date.toLocaleString( 'en-US', { day: '2-digit' });
  // const year = props.date.getFullYear();
  // *** Moved Date Into NEw Component ExpenseDate *** //

  // const clickHandler = () => {
  //   setTitle("updated!!");
  //   console.log(title);
  // };

  return (
    <li>
      <Card className="expense-item">
        {/* <div>{props.date.toLocaleString("en-US", { month: 'long' })}</div> */}
        {/* <div>{month}</div>
           <div>{day}</div>
           <div>{year}</div> */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

export default ExpenseItem;
