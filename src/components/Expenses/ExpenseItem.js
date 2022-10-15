import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // function clickHandler(){}
  // const [title, setTitle] = useState(props.title);

  // // let title = props.title;
  // const clickHandler = () => {
  //   // title = "Updated!!";
  //   setTitle("Updated!!");
  //   console.log(title);
  // };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
