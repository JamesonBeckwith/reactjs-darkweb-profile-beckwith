import EducationTile from "../components/EducationTile.jsx";
import ExperienceTile from "../components/ExperienceTile.jsx";
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
  } else {
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
  }
}
export default PageView;
