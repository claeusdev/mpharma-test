import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { productsReducer } from "../redux/reducers";

const store = createStore(productsReducer, applyMiddleware(thunk));

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

afterEach(cleanup)

test("<App /> renders initial state", async () => {
  const {findByText} = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(await findByText("Exforge 10mg")).toBeTruthy();
})
