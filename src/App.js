import './App.css';
import Header from './header/Header';
import { Home } from './home/Home';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Checkout from './checkout/Checkout';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/checkout'>
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
