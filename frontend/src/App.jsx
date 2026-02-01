import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Home from "./pages/Home/Home"

const App = () => {
  const protectedLink = [
    { path: "/home", component: <Home /> },
  ]

  const publicLink = [
    { path: "/", component: <Login /> },
    { path: "/login", component: <Login /> },
    { path: "/signup", component: <SignUp /> },
  ]
  
  return (
    <div>
      <Routes>
        {publicLink.map(({ path, component }) => {
          return (
            <Route key={path} path={path} element={
              <PublicRoute>
                {component}
              </PublicRoute>
            } />
          )
        })}
        {protectedLink.map(({ path, component }) => {
          return (
            <Route key={path} path={path} element={
              <ProtectedRoute>
                {component}
              </ProtectedRoute>
            } />
          )
        })}
      </Routes>
    </div>
  )
}

export default App