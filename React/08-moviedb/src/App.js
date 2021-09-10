import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import index from "./index";
import Home from "./Pages/Home";
import SingleMovie from "./Pages/SingleMovie";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies/:id">
        <SingleMovie />
      </Route>
      {/* <Route path="*">
        <Error />
      </Route> */}
    </Switch>
  );
}

export default App;