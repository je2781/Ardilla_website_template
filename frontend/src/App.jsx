import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './components/pages/Root';
import HomePage from './components/pages/Home';
import Authentication, {action as authAction} from "./components/pages/Authentication";
import ErrorPage from "./components/pages/Error";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      id: 'root',
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "auth",
          element: <Authentication/>,
          action: authAction     
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
