import React from "react";
import {
  Route,
  Link
} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Task} from "./components/Task/Task";
export default function App() {
  return (
    <div className="App">
        <div>
            <nav className="navbar navbar-light">
                  <ul className="nav navbar-nav">
                      <li>
                            <Link to="/">Accueil</Link>
                      </li>
                      <li>
                            <Link to="/tasks">Tasks</Link>
                      </li>
                  </ul>
            </nav>
            <Route exact path="/"><Header/></Route>
            <Route exact path="/tasks/:slug"><Task/></Route>
        </div>
    </div>
  );
}

