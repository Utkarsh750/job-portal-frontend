import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdatedJob from "../Pages/UpdatedJob";
import Login from "../components/Login";
import JobDetails from "../Pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/salary",
        element: <SalaryPage />,
      },
      {
        path: "edit-job/:id",
        element: <UpdatedJob />,
        loader: ({ params }) =>
          fetch(
            `https://job-portal-backend-cuds.onrender.com/all-jobs/${params.id}`
          ),
      },

      {
        path: "/job/:id",
        element: <JobDetails />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Login />,
  },
]);

export default router;
