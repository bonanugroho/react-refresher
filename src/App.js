import React, { useState } from "react";

import GoalLists from "./components/GoalLists/GoalLists";
import NewGoal from "./components/NewGoal/NewGoal";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: "cg1", text: "Finish Course" },
    { id: "cg2", text: "Learn all about course main topics" },
    { id: "cg3", text: "Help other students in the course Q&A" },
  ]);
  // const courseGoals = ;

  const onAddNewGoalHandler = (newGoal) => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal)
    });
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={onAddNewGoalHandler} />
      <GoalLists goals={courseGoals} />
    </div>
  );
};

export default App;
