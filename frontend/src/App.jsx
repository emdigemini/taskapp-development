import { Routes, Route } from "react-router-dom"
import ProtectedLayout from "./components/ProtectedLayout"
import ProtectedRoute from "./components/ProtectedRoute"
import PublicRoute from "./components/PublicRoute"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Dashboard from "./pages/Dashboard/Dashboard"
import Projects from "./pages/Projects/Projects"
import Team from "./pages/Team/Team"
import Messages from "./pages/Messages/Messages"
import Profile from "./pages/Profile/Profile"

const App = () => {
  const protectedLinks = [
    { path: "/dashboard", component: <Dashboard />  },
    { path: "/projects", component: <Projects />  },
    { path: "/team", component: <Team />  },
    { path: "/messages", component: <Messages />  },
    { path: "/profile", component: <Profile />  },
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