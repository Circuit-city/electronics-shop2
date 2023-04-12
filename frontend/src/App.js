import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import LogOut from './components/LogOut';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
       {user? <LogOut /> : <SignUp />}
    </div>
  );
}

export default App;
