import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from '../screens/Home';
import NewsDetails from "../screens/NewsDetails"
import Error404 from "../screens/404";
import Header from "../components/Header"
import Footer from "../components/Footer"

const RouterComponent = () => (
    <Router>
        <Header />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/news/:newsSources/:newsName">
                <NewsDetails />
            </Route>
            <Route path="*">
                <Error404 />
            </Route>
        </Switch>
        <Footer />
    </Router>
)

export default RouterComponent