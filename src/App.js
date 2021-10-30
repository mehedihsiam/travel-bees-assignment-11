import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './contexts/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import Register from './Pages/Register/Register';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import Booking from './Pages/Booking/Booking';
import AllPackages from './Pages/AllPackages/AllPackages';
import AddPackage from './Pages/AddPackage/AddPackage';
import DashBoard from './Pages/DashBoard/DashBoard';
import Footer from './Shared/Footer/Footer';
import ManagePackages from './Pages/ManagePackages/ManagePackages';

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/allPackages">
            <AllPackages></AllPackages>
          </Route>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <PrivateRoute path="/allOrders">
            <ManageAllOrders></ManageAllOrders>
          </PrivateRoute>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/addPackage">
            <AddPackage></AddPackage>
          </Route>
          <Route exact path="/managePackages">
            <ManagePackages></ManagePackages>
          </Route>
          <PrivateRoute exact path="/dashBoard">
            <DashBoard></DashBoard>
          </PrivateRoute>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
