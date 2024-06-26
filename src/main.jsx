import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Applied from "./components/applied/Applied.jsx";
import Blog from "./components/blog/Blog.jsx";
import JobDetails from "./components/jobDetails/JobDetails.jsx";
import Main from "./components/main/Main.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    
    children:[
      {
        path:'/',
        element:<Main></Main>,
      },

      {
        path:'/jobDetails/:id',
        element:<JobDetails></JobDetails>,
       loader: () => fetch('../jobs.json')
      },
      {
        path:'/applied',
        element:<Applied></Applied>,
        loader: () => fetch('../jobs.json')
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
