import React from "react";

import "./GoalLists.css";

const GoalLists = (props) => {
//   console.log(props.goals);
  return (
    <ul className="goal-list">
      {props.goals.map( (goal) => {
          return <li key={goal.id}>{goal.text}</li>
      })}
    </ul>
  );
};

export default GoalLists;
