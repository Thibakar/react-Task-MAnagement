import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import LoginPage from './components/Login';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route path="/TodoList" component={TodoList} />
          <Route path="/Login" component={LoginPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
