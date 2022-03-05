import "./App.css";
import Contacts from "./components/Contacts";
import Edit from "./components/Contacts/Edit";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div id="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/edit/:id" component={Edit} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
