import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './views/auth/login';
import Signup from './views/auth/signup';
import IncomeSurvey from './views/quizzes/income-survey';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/income-survey">
          <IncomeSurvey />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;