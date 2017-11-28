import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import LogIn from "./pages/LogIn";
import Landing from "./pages/Landing";
import Browse from "./pages/Browse";
import CreateListing from "./pages/CreateListing";

//if not logged in, route to pages/LogIn
const App = () => {
	return <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Landing} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/browse" component={Browse} />
        <Route exact path="/create" component={CreateListing} />
      </div>
    </Router>;
};

export default App;
