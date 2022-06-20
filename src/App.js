import './App.css';
import UserInterface from './Login/UserInterface';
import Authenticate from './Login/Authenticate';

const App = () => {

  const user = parseInt(localStorage.getItem("wheelee_user"))

  return (
    <div className="App">
      {user ? <UserInterface/> : <Authenticate/>}
    </div>
  );
}

export default App;
