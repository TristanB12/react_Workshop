import Contact from './Contact'
import Home from './Home'
import Menu from './Menu'
import logo from './img/logoPizza.png'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function  App() {
	return (
    <Router>
      <div>
        <nav>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">My react App
            <img src={logo} height="60" width="60" className="logo" />
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <Link to="/contact">Contact</Link></li>
            <li> <Link to="/home">Home</Link></li>
            <li> <Link to="/menu">Menu</Link></li>
          </ul>
        </div>
        </nav>

        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
          </div>
    </Router>
	);
}

export  default  App;