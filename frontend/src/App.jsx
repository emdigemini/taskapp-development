import { Routes, Route } from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Dashboard from "./pages/Home/Dashboard"

const App = () => {
  const protectedLinks = [
    { path: "/dashboard", component: <Dashboard />  }
  ]

  const publicLinks = [
    { path: "/", component: <Login />  },
    { path: "/login", component: <Login />  },
    { path: "/signup", component: <SignUp />  }
  ]
  
  return (
    <div>
      <Routes>
        {publicLinks.map(({path, component}) => {
          return (
            <Route key={path} path={path} element={
              <PublicRoute>
                {component}
              </PublicRoute>
            } />
          )
        })}
        <Route element={<ProtectedLayout />}>
          {protectedLinks.map(({path, component}) => {
            return (
              <Route key={path} path={path} element={
                <ProtectedRoute>
                  {component}
                </ProtectedRoute>
              } />
            )
          })}
        </Route>
      </Routes>
    </div>
  )
}

export default App