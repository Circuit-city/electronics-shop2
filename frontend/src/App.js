import './App.css';
import Login from './components/Login';
import LogOut from './components/LogOut';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/logout' element={<LogOut />}/>
       </Routes>
    </div>
  );
}

export default App;
