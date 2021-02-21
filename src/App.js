import "./App.css";
import SearchShowBuilder from "./Containers/SearchShowBuilder/SearchShowBuilder";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SearchShowBuilder} />
      </Switch>
    </div>
  );
}

export default App;
