import React, { useState } from "react";

const Card = ({
  id,
  name,
  description,
  cardStatus,
  handleStatus,
  handleDelete,
  handleEdit,
}) => {
  const [innerStatus, setInnerStatus] = useState(cardStatus);
  return (
    <div className="todo-card">
      <p className="crad-name">
        <span className="bold">Name: </span>
        <span className="todo-card-name">
          {name.trim() ? name : "No Name Given"}
        </span>
      </p>
      <p className="crad-description">
        <span className="bold">Description: </span>
        <span className="todo-card-description">
          {description.trim() ? description : "No Description Given"}
        </span>
      </p>
      <div className="todo-status">
        <span className="bold">Status: </span>
        <select
          name="card-status"
          defaultValue={innerStatus}
          className={`card-status ${innerStatus}`}
          onChange={(e) => handleStatus(e, id)}
          onClick={(e) => setInnerStatus(e.target.value)}
        >
          <option value="notCompleted">Not Completed</option>

          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="todo-button-group">
        <button
          className="todo-card-edit"
          onClick={() => handleEdit(name, description, id)}
        >
          Edit
        </button>

        <button className="todo-card-delete" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;