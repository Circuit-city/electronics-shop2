import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import LogOut from './components/LogOut';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
       {user? <LogOut /> : <Login />}
    </div>
  );
}

export default App;
