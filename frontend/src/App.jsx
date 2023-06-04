import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from './components/pages/Root';
import HomePage from './components/pages/Home';
import Login, {action as loginAction} from "./components/pages/Login";
import Signup, {action as signupAction} from "./components/pages/Signup";
import Error from "./components/pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      id: 'root',
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "login",
          element: <Login/>,
          action: loginAction     
        },
        {
          path: "signup",
          element: <Signup/>,
          action: signupAction     
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
