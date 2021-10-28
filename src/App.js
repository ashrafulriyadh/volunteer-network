import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Donation from './Pages/Donation/Donation';
import Events from './Pages/Events/Events';
import Blog from './Pages/Blog/Blog';
import Admin from './Pages/Admin/Admin';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NotFound from './Pages/NotFound/NotFound';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AllEvent from './AllEvent/AllEvent';

function App() {
  return (
  <AuthProvider>
     <Router>
     <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/donation">
      <Header></Header>
        <Donation></Donation>
      </Route>
      <PrivateRoute path="/events">
      <Header></Header>
        <AllEvent></AllEvent>
      </PrivateRoute>
      <Route path="/blog">
      <Header></Header>
        <Blog></Blog>
      </Route>
      <Route path="/login">
      <Header></Header>
        <Login></Login>
      </Route>
      <PrivateRoute path="/admin">
      <Header></Header>
        <Admin></Admin>
      </PrivateRoute>
      <Route path="/register">
      <Header></Header>
        <Register></Register>
      </Route>
      <Route exact path="*">
      <Header></Header>
       <NotFound></NotFound>
      </Route>
     </Switch>
   </Router>
  </AuthProvider>
  );
}

export default App;
