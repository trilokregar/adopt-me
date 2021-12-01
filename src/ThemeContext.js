import { createContext } from "react";

// both are same //
// const ThemeContext = createContext(["green", function () {}]);
const ThemeContext = createContext(["green", () => { }]);


export default ThemeContext;