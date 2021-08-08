import { BrowserRouter  as Router , Switch , Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import NavBar  from './component/NavBar';
import BackDrop  from './component/BackDrop';
import SideDrawer  from './component/SideDrawer';

function App() {
  return (
    <Router>
  
    <NavBar/>
      <SideDrawer/>
      <BackDrop/>
      <main>
        <Switch>
          <Route exact path="/"  component={HomeScreen}/>
          <Route exact path="/product/:id"  component={ ProductScreen}/>
          <Route exact path="/cart"  component={CartScreen}/>
        </Switch>
      </main>

     
    
    </Router>
  );
}

export default App;
