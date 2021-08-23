import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import HeaderLayout from "./laytout/HeaderLayout";
import FooterLayout from "./laytout/FooterLayout";
import MainComponent from "./components/MainComponent";
import DetailComponent from "./components/DetailComponent";
import SigninComponent from "./components/SigninComponent";
import SignupComponent from "./components/SignupComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainComponent}></Route>
          <Route path="/main" component={MainComponent}></Route>

          <Route path="/signin" component={SigninComponent}></Route>
          <Route path="/signup" component={SignupComponent}></Route>
          <Route path="/detail/:bookid" component={DetailComponent}></Route>
        </Switch>
      </Router>
      <div>
        <FooterLayout />
      </div>
    </div>
  );
}

export default App;
