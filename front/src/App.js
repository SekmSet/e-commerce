import React from "react";
import {ToastContainer} from "react-toastify";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Articles from "./components/Articles/Articles";
import Article from "./components/Articles/Article";
import ShippingCost from "./components/ShippingCost/ShippingCost";
import Header from "./components/Header/Header";
import Registry from "./components/Authentication";
import Search from "./components/Articles/Search";
import Profile from "./components/profile/profile";
import Cart from "./components/ShippingCart/ShippingCart";

import 'react-toastify/dist/ReactToastify.css';
import "./style/App.scss";

function App() {
    return (
        <div className="App">
            <div id="anim"></div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Articles />
                    </Route>

                    <Route path="/cart">
                        <Cart />
                    </Route>

                    <Route path="/shippingCost">
                        <ShippingCost />
                    </Route>

                    <Route path="/articles/search">
                        <Search />
                    </Route>

                    <Route path="/articles/:id">
                        <Article />
                    </Route>

                    <Route path="/articles">
                        <Articles />
                    </Route>

                    <Route path="/registry">
                        <Registry />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>

                </Switch>
            </Router>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
        </div>
    );
}

export default App;
