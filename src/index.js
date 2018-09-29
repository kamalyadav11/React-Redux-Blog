import React from "react";
import ReactDOM from "react-dom";
import promise from "redux-promise";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./index.css";
import reducers from "./reducers";
import NewPost from "./components/NewPost";
import PostIndex from "./components/PostIndex";
import SinglePost from "./components/SinglePost";
import registerServiceWorker from "./registerServiceWorker";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PostIndex} exact />
        <Route path="/posts/new" component={NewPost} />
        <Route path="/posts/:id" component={SinglePost} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
