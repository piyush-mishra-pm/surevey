import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Home from "./components/Home";
import ChooseSurvey from "./components/ChooseSurvey";
import Survey from "./components/Survey";

export default function App() {

  return (
    < div>
      <ToastContainer />
      <Router>
        <Header />
        <Switch>
          <Route path="/choose-survey">
            <ChooseSurvey />
          </Route>
          <Route path="/survey/:userType">
            <Survey />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}