import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Inventory } from "./domain";
import "./App.css";


function App() {

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" exact render={() => <Inventory />} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;