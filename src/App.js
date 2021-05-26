import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { Route,  BrowserRouter as Router } from 'react-router-dom';


import LoginPage from './components/Login';
import TodoList from './components/TodoList';


function App() {
  return (
    <div className="App">
       <Router>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route path="/TodoList" component={TodoList} />
        </div>
        </Router>
    </div>
  );
}

export default App;
