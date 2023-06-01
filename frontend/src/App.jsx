import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './components/pages/Root';
import HomePage from './components/pages/Home';
import Authentication, {action as authAction} from "./components/pages/Authentication";
import Error from "./components/pages/Error";
import {checkAuthLoader, loader as authTokenLoader} from './util/auth';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      loader: authTokenLoader,
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
