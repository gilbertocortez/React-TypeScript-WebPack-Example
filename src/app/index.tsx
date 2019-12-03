import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloWorld } from "./components/HelloWorld";

ReactDOM.render(
    <HelloWorld firstName="Gilberto" lastName="Cortez" />,
    document.getElementById("content")
);