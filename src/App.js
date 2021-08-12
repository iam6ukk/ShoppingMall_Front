import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderLayout from "./laytout/HeaderLayout";
import FooterLayout from "./laytout/FooterLayout";
import MainComponent from "./components/MainComponent";
// import LoginComponent from "./components/LoginCompoenet";
import "./App.css";

function App() {
  return (
    <div className="App">
      <HeaderLayout />
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact component={MainComponent}></Route>
            <Route path="/main" component={MainComponent}></Route>
            {/* <Route path="/login" component={LoginComponent}></Route> */}
          </Switch>
        </Router>
      </div>
      <FooterLayout />
    </div>
  );
}

export default App;
