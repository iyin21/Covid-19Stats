import './App.css';
import {Switch, Route, NavLink, Redirect} from "react-router-dom";
import CovidStat from "./containers/CovidStat";
import Covid from "./containers/Covid";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={"/covid/test"}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={"/"} exact component={CovidStat} />
        <Route path={"/covid/:covid"} exact component={Covid} />
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
