import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import LogOut from "./components/LogOut"
import Chekout from "./components/Checkout"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logout" element={<LogOut />}/>
          <Route path="/checkout" element={<Chekout />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

 export default App
