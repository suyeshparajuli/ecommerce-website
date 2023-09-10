 import './App.css';
 import './Cart.css';
 import './Products.css'
 import Navbar from './navbar';
 import { Route,  BrowserRouter as Router, Switch} from 'react-router-dom';
 import Home from './Home';
 import MyCart from './MyCart';


import AllItems from './AllItems';


function App() {

  return (

    <Router>
      <div className='App'>
        <Navbar/>
       
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/product">
            <AllItems/>
          </Route> 
            <Route path="/MyCart">
            <MyCart/>
          </Route>
            
        </Switch>
      </div>
    </Router>
    
  );
}
export default App;



