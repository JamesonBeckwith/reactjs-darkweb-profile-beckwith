import EducationTile from "../components/EducationTile.jsx";
import ExperienceTile from "../components/ExperienceTile.jsx";
import NavigationBar from "../components/NavigationBar";
function PageView() {
  const urlraw = document.location.href;
  // Get the URL
  const url = new URL(urlraw);
  console.log(url);
  const pathname = url.pathname;
  console.log(pathname); // Output: "#anchor"

  if (pathname === "/education") {
    return (
      <div>
        <div className="navigationBar">
          <NavigationBar />
        </div>
        <p>EducationTile</p>
        <EducationTile />
      </div>
    );
  } else {
    return (
      <div>
        <div className="navigationBar">
          <NavigationBar />
        </div>
        <p>ExperienceView</p>
        <ExperienceTile />
      </div>
    );
  }
}
export default PageView;
