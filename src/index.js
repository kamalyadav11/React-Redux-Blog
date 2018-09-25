import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import "./index.css";
import App from "./components/App";
// import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

class GoodBye extends React.Component {
  render() {
    return <div>GoodBye</div>;
  }
}

ReactDOM.render(
  <Provider
    store={createStore(() => {
      console.log("I am reducer");
    })}
  >
    {/* Provider is a special React Redux component that magically make the store available to all container components in the application without passing it explicitly. You only need to use it once when you render the root component: */}

    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={GoodBye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
