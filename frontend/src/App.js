import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import NavBar from './component/NavBar';
import BackDrop from './component/BackDrop';
import SideDrawer from './component/SideDrawer';
import { useState } from 'react';
function App() {
  let flag = false;

  const toggleSidebar = () => {
    !sidebarCurrent ? sideBarState(true) : sideBarState(false)
    console.log("toggle side bar" + JSON.stringify(sidebarCurrent));
  }


  const [sidebarCurrent, sideBarState] = useState(flag);



  return (
    <Router>

      <NavBar click={toggleSidebar} />

      <BackDrop showStatus={sidebarCurrent} click={toggleSidebar} />
      {/* <p>sidebar current `${sidebarCurrent}`</p> */}
      <SideDrawer showStatus={sidebarCurrent} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>



    </Router>
  );
}

export default App;
