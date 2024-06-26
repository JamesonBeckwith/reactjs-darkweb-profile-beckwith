import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import "./Components.css";

export default function footerBar() {
    return (
        <>
        <div className="footerContent">
          <div className="techLogos">
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <p>
              I am using Vite, ReactJS, and Nginx pushed through Tor to host this site. If you
              want to see the source code for this project, you can see it on my
              Github
            </p>
          </div>
        </div>
        
      </>
    )
}
