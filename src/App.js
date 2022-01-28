import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import NotFoundd from "./pages/PageNotFound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Register/Register";
import Recipes from "./pages/Recipes/Recipes";
import NewRecipe from "./pages/NewRecipe/NewRecipe";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/Signup">
            <Signup />
          </Route>
          <Route exact path="/recipes">
            <Recipes />
          </Route>
          <Route exact path="/newrecipe">
            <NewRecipe />
          </Route>
          <Route>
            <NotFoundd />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
