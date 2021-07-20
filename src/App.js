import logo from './logo.svg';
import './App.css';
import Userform from './components/Userform';
import Userlist from './components/Userlist';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Userform></Userform>
      <Userlist></Userlist>
    </div>
  );
}

export default App;
