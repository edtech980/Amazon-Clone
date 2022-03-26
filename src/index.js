import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App.js"
import { StateProvider } from "./components/StateProvider.js"
import "./styles/global.css";
import {initialState} from "./components/reducer"
import reducer from "./components/reducer.js"

ReactDOM.render(
    <React.StrictMode>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </React.StrictMode>
    , document.getElementById("root"));


