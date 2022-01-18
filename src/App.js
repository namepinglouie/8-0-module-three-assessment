import "./App.css";
import {Component} from "react"
import {Switch, Route} from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Movies from "./components/Movies";
import People from "./components/People";
import Locations from "./components/Locations";

class App extends Component {
  render() {
    return(
      <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/people" component={People} />
        <Route path="/locations" component={Locations} />
      </Switch>
    </div>
    )
  }
}

export default App;