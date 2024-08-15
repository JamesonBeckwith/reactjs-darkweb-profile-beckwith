import NavigationBar from "../components/NavigationBar";
import FooterBar from "../components/FooterBar";
import viteLogo from "../assets/images/techStack/vite.svg"
import reactLogo from "../assets/images/techStack/react.svg"
import nginxLogo from "../assets/images/techStack/nginx.png"
import torLogo from "../assets/images/techStack/tor.png"

function AboutmeView() {
  return (
    <>
      <div className="flexBox">
        <div className="navigationBar">
          <NavigationBar />
        </div>
        <p>about me stuff</p>
        <div className="bodyContent">
          <div>
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
        </div>
        <div className="footerBar">
          <FooterBar />
        </div>
      </div>
      
    </>
  );
}
export default AboutmeView;
