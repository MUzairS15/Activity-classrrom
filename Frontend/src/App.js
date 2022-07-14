import './App.css';
import NavBar from './components/Navbar';
import Code from './components/Code';

import Quiz from './components/Quiz';
import Home from './components/Home';
import Attendance from './components/Attendance';
import Registration from './components/Registration';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    localStorage.getItem("auth-token") != null ?
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/code">
              <Code />
            </Route>
            <Route exact path="/Quiz/genQuiz">
              <Quiz />
            </Route>
            <Route exact path="/attendance">
              <Attendance />
            </Route>
          </Switch>
        </Router>
      </div>
    :
      <Registration />
  )
}

export default App;
