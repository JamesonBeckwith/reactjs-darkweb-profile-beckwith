import "./Components.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

function navigationBar() {
  const navigate = useNavigate();
  const homeButton = () => {
    navigate("/home");
  };
  const educationButton = () => {
    navigate("/education");
  };
  const experienceButton = () => {
    navigate("/experience");
  };
  const aboutmeButton = () => {
    navigate("/aboutme");
  };

  return (
    <>
      <div className="navBar">
        <a className="individualButton" href="" onClick={homeButton}>
            <p>Home</p>
        </a>
        <a className="individualButton" href="" onClick={educationButton}>
            <p>Education</p>
        </a>
        <a className="individualButton" href="" onClick={experienceButton}>
            <p>Experience</p>
        </a>
        <a className="individualButton" href="" onClick={aboutmeButton}>
            <p>About Me</p>
        </a>
        {/* <Button
          variant="contained"
          style={{ backgroundColor: "#FF6663", maxHeight: "30px" }}
          onClick={homeButton}
        >
          <p>homeButton</p>
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF6663", maxHeight: "30px" }}
          onClick={educationButton}
        >
          <p>educationButton</p>
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF6663", maxHeight: "30px" }}
          onClick={experienceButton}
        >
          <p>experienceButton</p>
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: "#FF6663", maxHeight: "30px" }}
          onClick={aboutmeButton}
        >
          <p>aboutmeButton</p>
        </Button> */}
      </div>
    </>
  );
}
export default navigationBar;
