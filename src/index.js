import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { v4 as uuidv4 } from "uuid";

const intialTask = [
  {
    id: 1,
    title: "Backlog",
    cards: [
      { name: "tasks 1", stage: 0, cid: uuidv4() },
      { name: "tasks 2", stage: 0, cid: uuidv4() },
    ],
  },
  {
    id: 2,
    title: "Todo",
    cards: [],
  },
  {
    id: 3,
    title: "InProgress",
    cards: [],
  },
  {
    id: 4,
    title: "Done",
    cards: [],
  },
];

export const todo = React.createContext();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <todo.Provider value={intialTask}>
    <App />
  </todo.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
