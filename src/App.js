import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './views/auth/login';
import Signup from './views/auth/signup';
import IncomeSurvey from './views/quizzes/income-survey';
import CrearCuenta from './views/empleadores/CrearCuenta'
import LoginEmpleador from './views/empleadores/LoginEmpleador';

function App() {
  
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/income-survey">
          <IncomeSurvey />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/crear-cuenta-empleado" component={CrearCuenta} />
        <Route exact path="/login-empleado" component={LoginEmpleador} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;