import React, { useState, useEffect } from "react";
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const value = useWorkoutsContext()
  const {workouts,dispatch} = value
  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("/api/workouts");
        const json = await res.json();
        if (res.ok) {
          console.log(json);
          dispatch({type:'SET_WORKOUTS', payload:json})
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home" >
      <div>
        <h2> We are at home. Make yourself welcome!</h2>
        {workouts &&
          workouts.map((item) => {
            return <WorkoutDetails key={item.id} workout={item} />;
          })}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
