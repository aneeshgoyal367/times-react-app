
// import './App.css';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Userform from './components/Userform';
// import Message from './components/Message';
// import About from './components/About';
// import Userlist from './components/Userlist';


// function App() {
//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-default">
//           <div className="container-fluid">
//             <div className="navbar-header">
//               <a className="navbar-brand" href='#'>WebsiteName</a>
//             </div>
//           <ul className="nav navbar-nav">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//           </div>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//          { <Switch>
//            <Route path="/about">
//             <About />
//           </Route> 
//           <Route path="/users">
//             <Message />
//           </Route>
//           <Route path="/">
//             <div>
//             <Userform />
//             <Userlist></Userlist>
//             </div>
//           </Route>
//         </Switch> }
//       </div>
//     </Router> 
//   );
// }
  

// export default App;
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Userform from './components/Userform';
import Messages from './components/Messages';
import About from './components/About';
import Userlist from './components/Userlist';
function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </div>
        </nav>
        {<Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Messages />
          </Route>
          <Route path="/">
            <div>
              <Userform />
              <Userlist></Userlist>
            </div>
          </Route>
        </Switch>}
      </div>
    </Router>
  );
}

export default App;