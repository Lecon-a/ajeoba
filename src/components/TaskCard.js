import React from "react";
import { Link } from "react-router-dom";
import HorizontalDivider from "./HorizontalDivider";

const TaskCard = () => {
  
  return (
    <div className="task-card">
      <div className="taskcard-title d-flex justify-content-between p-3 align-items-center">
        <div>
          <h3>Unresolved tickets</h3>
          <p>
            Group <strong>Support</strong>
          </p>
        </div>
        <Link>View details</Link>
      </div>
      <div className="taskcard-details">
        <div className="taskcard-title d-flex justify-content-between p-3 align-items-center">
          <p>Waiting on Feature Request</p>
          <p>4238</p>
        </div>
        <HorizontalDivider />
        <div className="taskcard-title d-flex justify-content-between p-3 align-items-center">
          <p>Awaiting Customer Response</p>
          <p>1005</p>
        </div>
        <HorizontalDivider />
        <div className="taskcard-title d-flex justify-content-between p-3 align-items-center">
          <p>Awaiting Developer Fix</p>
          <p>914</p>
        </div>
        <HorizontalDivider />
        <div className="taskcard-title d-flex justify-content-between p-3 align-items-center">
          <p>Pending</p>
          <p>281</p>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
