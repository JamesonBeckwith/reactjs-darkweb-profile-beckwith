import viteLogo from "../assets/images/techStack/vite.svg"
import reactLogo from "../assets/images/techStack/react.svg"
import nginxLogo from "../assets/images/techStack/nginx.png"
import torLogo from "../assets/images/techStack/tor.png"
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
            <a href="https://nginx.org" target="_blank">
              <img src={nginxLogo} className="logo nginx" alt="Nginx logo" />
            </a>
            <a href="https://torproject.org" target="_blank">
              <img src={torLogo} className="logo tor" alt="Tor logo" />
            </a>
          </div>
        </div>
        
      </>
    )
}
