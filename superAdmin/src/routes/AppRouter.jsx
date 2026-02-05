import { createBrowserRouter } from "react-router-dom";
import App from "../App";

// Pages for admin dashboard
import Dashboard from "../pages/Dashboard";
import ClientManagment from "../pages/ClientManagment";
import ChecklistBuilder from "../pages/ChecklistBuilder";
import AssignedChecklist from "../pages/AssignedChecklist";
import ReportsAnalytics from "../pages/ReportsAnalytics";
import Setting from "../pages/Setting";

// additional pages
import ViewClient from "../pages/ViewClient";
import OverView from "../components/clientManagment/overview/OverView";
import Settings from "../components/clientManagment/settings/Settings";
import Subscription from "../components/clientManagment/subscription/Subscription";

// Creating Router Object
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { index: true, element: <Dashboard/> },
      {
        path: "client-managment",
        element: <ClientManagment />,
      },
      {
        path: "viewClient",
        element: <ViewClient />,
        children:[
          {index: true, element: <OverView/>},
          {path:"subscription", element: <Subscription/>},
          {path:"settings", element: <Settings/>}
        ]
      },
      { path: "checklist-builder", element: <ChecklistBuilder /> },
      { path: "assigned-checklist", element: <AssignedChecklist /> },
      { path: "reports-analytics", element: <ReportsAnalytics /> },
      { path: "setting", element: <Setting /> },
    ],
  },
]);

export default router;
