import educationArrays from "../profileData/education.json";
import React from "react";
import "./Components.css";

function educationTile() {
  const collegeData = educationArrays.find((data) => data.key === "college");

  return collegeData ? (
    <div className="collegeArray">
      {collegeData.college.map((collegeList) => (
        <div className="collegeTile" key={collegeList.id}>
          <p>{collegeList.name}</p>
          <p>{collegeList.major}</p>
          <p>Start: {collegeList.start}</p>
          <p>End: {collegeList.end}</p>
          <p>{collegeList.graduated ? "Graduated" : "Not Graduated"}</p>
          <p>GPA: {collegeList.gpa}</p>
        </div>
      ))}
    </div>
  ) : null; // Return null if no college data found
}
export default educationTile;
