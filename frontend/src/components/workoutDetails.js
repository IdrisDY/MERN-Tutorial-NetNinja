import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();
  async function handleClick() {
    const response = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  }
  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load(kg):{workout.load}</strong>
      </p>
      <p>
        <strong>Reps:{workout.reps}</strong>
      </p>
      <p>{workout.createdAt}</p>
      <button onClick={handleClick}> Delete</button>
    </div>
  );
};

export default WorkoutDetails;
