import Contact from './Contact'
import Home from './Home'
import Menu from './Menu'
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
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
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