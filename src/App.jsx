import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CircularProgress } from "@mui/material";
// import the pages and style
import "./App.css";
import HomeView from "./views/HomeView.jsx";
import PageView from "./views/PageView.jsx";
import AboutmeView from "./views/AboutmeView.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeView />,
    },
    {
      path: "/home",
      element: <HomeView />,
    },
    {
      path: "/education",
      element: <PageView />,
    },
    {
      path: "/experience",
      element: <PageView />,
    },
    {
      path: "/aboutme",
      element: <AboutmeView />,
    },
  ]);

  useEffect(() => {
    // Set isLoading to false after some time or when a condition is met
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change this value as needed
  }, []);

  return (
    <div className="appLevelDiv">
      {isLoading ? (
        <div className="circularProgressContainer">
          <CircularProgress className="circularProgress" />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
}

export default App;
