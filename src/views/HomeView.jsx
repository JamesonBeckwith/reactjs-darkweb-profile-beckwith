import infoRaw from "../profileData/info.json";
import React from "react";
import "./views.css";
import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";

function HomeView() {
  return (
    <>
      <div className="flexBox">
        <div className="navigationBar">
          <NavigationBar />
        </div>
        <div className="contentBody">
          {infoRaw &&
            infoRaw.map((info) => (
              <div className="introductionInformation" key={info.lName}>
                <title>Jameson's Profile</title>
                <p>{info.fName}</p>
                <p>{info.lName}</p>
                <p>{info.intro}</p>
                <p>{info.shortDescription}</p>
              </div>
            ))}
        </div>
        <div className="footerBar">
          <FooterBar />
        </div>
      </div>
    </>
  );
}
export default HomeView;
