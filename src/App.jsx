import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Home from "./pages/Home";
import ChooseSurvey from "./pages/ChooseSurvey";
import Survey from "./pages/Survey";

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
          <Route path="/survey">
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