 import React, { Component } from "react"; 
import { Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar';
import WineList from './Components/WineList';
import WineDetails from './Components/WineDetails';
import Cart from './Components/Cart';
import PageNotFound from './Components/PageNotFound';
import "./App.css";

class App extends Component {
  render() {
    return <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={WineList} />
        <Route path="/details" component={WineDetails} />
        <Route path="/cart" component={Cart} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>;
  }
}

export default App;
