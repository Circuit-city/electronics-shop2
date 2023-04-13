import {BrowserRouter, Routes, Route} from "react-router-dom"

import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

 export default App
