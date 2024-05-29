import EducationTile from "../components/EducationTile.jsx";
import ExperienceTile from "../components/ExperienceTile.jsx";
import ProjectTile from "../components/ProjectTile.jsx";
import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar.jsx";
import "./views.css";

function PageView() {
  const urlraw = document.location.href;
  // Get the URL
  const url = new URL(urlraw);
  console.log(url);
  const pathname = url.pathname;
  console.log(pathname); // Output: "#anchor"

  if (pathname === "/education") {
    return (
      <>
        <div className="flexBox">
          <div className="navigationBar">
            <NavigationBar />
          </div>
          <div className="contentBody">
            <p>EducationTile</p>
            <EducationTile />
          </div>
          <div className="footerBar">
            <FooterBar />
          </div>
        </div>
      </>
    );
  } else if (pathname === "/experience") {
    return (
      <>
        <div className="flexBox">
          <div className="navigationBar">
            <NavigationBar />
          </div>
          <div className="contentBody">
            <p>ExperienceTile</p>
            <ExperienceTile />
          </div>
          <div className="footerBar">
            <FooterBar />
          </div>
        </div>
      </>
    );
  } else if (pathname === "/project") {
    return (
      <>
        <div className="flexBox">
          <div className="navigationBar">
            <NavigationBar />
          </div>
          <div className="contentBody">
            <p>ProjectTile</p>
            <ProjectTile />
          </div>
          <div className="footerBar">
            <FooterBar />
          </div>
        </div>
      </>
    )
  } else if (pathname === "/404") {
    return (
      <>
        <div className="flexBox">
          <div className="navigationBar">
            <NavigationBar />
          </div>
          <div className="contentBody">
            <h1>404 Error</h1>
            <p>Oops, something happened. This page is unavailable at the moment, sorry. </p>
          </div>
          <div className="footerBar">
            <FooterBar />
          </div>
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="flexBox">
          <div className="navigationBar">
            <NavigationBar />
          </div>
          <div className="contentBody">
            <h1>404 Error</h1>
            <p>Oops, something happened. This page is unavailable at the moment, sorry. </p>
          </div>
          <div className="footerBar">
            <FooterBar />
          </div>
        </div>
      </>
    )
  }
}
export default PageView;
