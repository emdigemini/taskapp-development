import { Routes, Route } from "react-router-dom"
import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import Home from "./pages/Home/Home"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App