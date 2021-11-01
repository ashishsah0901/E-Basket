import './App.css';
import Header from './header/Header';
import { Home } from './home/Home';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom';
import Checkout from './checkout/Checkout';
import Login from './login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './state/StateProvider';
import Footer from './footer/Footer';

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      }
    });
    // eslint-disable-next-line 
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/'>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
