import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//add more loigc

const NewGoal = () => {
  const [text, setText] = useState("");

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <section className="from">
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewGoal;
