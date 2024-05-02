import experienceArrays from "../profileData/experience.json";
import React from "react";
import "./Components.css";

function experienceTile() {
  const workData = experienceArrays.find((data) => data.key === "work");

  return workData ? (
    <div className="workArray">
      {workData.work.map((workList) => (
        <div className="workTile" key={workList.id}>
          <p>{workList.name}</p>
          <p>{workList.title}</p>
          <p>{workList.type}</p>
          <p>{workList.start}</p>
          <p>{workList.end}</p>
          <p>{workList.current ? "Current Job" : "Past Job"}</p>
        </div>
      ))}
    </div>
  ) : null; // Return null if no work data found
}
export default experienceTile;
