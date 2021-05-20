import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from './components/homepage';
import FormPage from './components/formpage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/form' component={FormPage} />
      </Switch>
    </Router> 
  );
}

export default App;
