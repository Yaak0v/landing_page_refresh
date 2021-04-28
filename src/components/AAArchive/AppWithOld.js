import "./App.css";
import Contact from "./components/contact/contact";
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import { AuthProvider } from './contexts/AuthCon';
import PrivateRoute from './components/privateRoute/privateRoute'
import Login from './components/Auth/login/login'

export default function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
        <Switch>
        <Route exact path='/login' component={Login}></Route>
        <PrivateRoute path="/" component={Home} exact ></PrivateRoute>
        <PrivateRoute exact path='/contact' component={Contact}></PrivateRoute>
        </Switch>
        </AuthProvider>
      </Router>
      {/* <Router> 
              <AuthProvider>
                <ScrollToTop />
                <Switch>
                  <PrivateRoute exact path='/' component={Home}></PrivateRoute>
                  <PrivateRoute exact path='/team' component={Team}></PrivateRoute>
                  <PrivateRoute exact path='/products' component={Products}></PrivateRoute>
                  <PrivateRoute exact path='/experience' component={Experience}></PrivateRoute>
                  <PrivateRoute exact path='/update-profile' component={UpdateProfile}></PrivateRoute>
                  <PrivateRoute exact path='/forgot-password' component={ForgotPassword}></PrivateRoute>
                  <PrivateRoute exact path='/dashboard' component={Dashboard}></PrivateRoute>
                  <PrivateRoute exact path='/newhome' component={NewHome}></PrivateRoute>
                </Switch>
              </AuthProvider>
            </Router> */}
    </div>
  );
}
