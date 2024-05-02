import NavigationBar from "../components/NavigationBar";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

function AboutmeView() {
  return (
    <div>
      <div className="navigationBar">
        <NavigationBar />
      </div>
      <p>about me stuff</p>
      <>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          {/* <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
              </button> */}
          <p>
            I am using Vite, ReactJS, and Nginx pushed through Tor to host this site. If you
            want to see the source code for this project, you can see it on my
            Github
          </p>
        </div>
      </>
    </div>
  );
}
export default AboutmeView;
