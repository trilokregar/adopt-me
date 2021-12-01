import { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
// import Pet from './Pet';

// for render conditionally sometimes searchparams or sometime details ---with help of library //
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import SearchParams from './SearchParams';
import Details from "./Details";
import ThemeContext from './ThemeContext';

////// older way ////
// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", { id: "id1", class: "class1" }, "Adopt Me!"),

//         // ...[1, 2, 3, 4].map((i) => React.createElement("h2", {}, i)), // for loop //

//         React.createElement(Pet, {
//             name: "luna",
//             animal: "dog",
//             breed: "havanese",
//         }),
//         React.createElement(Pet, {
//             name: "pepper",
//             animal: "bird",
//             breed: "cockateil",
//         }),
//         React.createElement(Pet, {
//             name: "sudo",
//             animal: "dog",
//             breed: "wheaten terrier",
//         }),
//     ]);
// };

////// newer way // using JSX /////
const App = () => {
  const theme = useState("darkblue");   // 'theme' is like using "themeHook" //

  return (

    <ThemeContext.Provider value={theme}>
      <div>
        {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="bird" breed="Cockatiel" />
        <Pet name="Beam" animal="Dog" breed="wheaten Terrier" /> */}

        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/Details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);