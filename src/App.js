import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

import "./App.css";
import ItemList from "./components/CourseGoals/ItemList/ItemList";

function App() {
  const [updateGoal, setUpdateGoal] = useState([
    { text: "Do exercise", id: "g1" },
    { text: "Do chin-ups", id: "g2" },
  ]);

  const goalValueHandler = (goalValue) => {
    setUpdateGoal((prevState) => {
      const updatedGoals = [...prevState];
      updatedGoals.unshift({
        text: goalValue,
        id: Math.floor(Math.random() + 2).toString(),
      });
      console.log();
      return updatedGoals;
    });
  };
  const deleteHandler = (id) => {
    setUpdateGoal((prevState) => {
      const updatedGoals = prevState.filter((item) => item.id !== id);
      return updatedGoals;
    });
  };

  let content = <p style={{textAlign:"center"}}>Not Added Goal Available!
     Add a New Goal</p>
  if (updateGoal.length > 0){
  content = <ItemList items={updateGoal} onDelete={deleteHandler} />;
  }
  return (
    <div>
      <section id="goal-form">
        <CourseInput addGoal={goalValueHandler} />
      </section>

      <section id="goals">
       {content}
      </section>
    </div>
  );
}

export default App;
