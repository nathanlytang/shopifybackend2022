import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { NotFound, Inventory } from "./domain";
import "./App.css";


function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Redirect to="/inventory" />} />

                    <Route path="/inventory" exact render={() => <Inventory />} />
                    <Route component={NotFound} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;