import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState("");
  const [emptyFields, setEmptyFields] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    const workout = { title, load, reps };
    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.msg);
      setEmptyFields(json.emptyFields);
      console.log(json);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      console.log("Workout added");
      dispatch({ type: "CREATE_WORKOUTS", payload: json });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a new workout</h3>

      <label>Exercise title:</label>
      <input
        className={emptyFields.includes("title") ? "error" : ""}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Load in kg:</label>
      <input
        className={emptyFields.includes("load") ? "error" : ""}
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />
      <label>Reps:</label>
      <input
        className={emptyFields.includes("reps") ? "error" : ""}
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />
      <button onClick={handleSubmit}> Add workout </button>
      {error && <p className="error">{error} </p>}
    </form>
  );
};

export default WorkoutForm;
