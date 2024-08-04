import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Dashboard from "./dashboard/Dashboard"

const App = () => {

  const router = createBrowserRouter([
    { index: true, element: <HomePage /> },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/dashboard', element: <Dashboard /> }
  ])
  return <RouterProvider router={router} />
}
export default App