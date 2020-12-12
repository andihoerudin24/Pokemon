import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { routes } from "./helpers/routes";
import PokemonContextProvider from "./context/PokemonContext";
import ErrorsContextProvider from './context/ErrorsContext';
function App() {
  return (
    <Router>
      <ErrorsContextProvider>
      <div className="App">
        <Header />
        <PokemonContextProvider>
          <Switch>
            <Route exact path={routes.root} component={Home} />
          </Switch>
        </PokemonContextProvider>
      </div>
      </ErrorsContextProvider>
    </Router>
  );
}

export default App;
