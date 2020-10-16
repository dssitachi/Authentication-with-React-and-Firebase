import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login'
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from './UpdateProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>                
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute  path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />

          </Switch>

        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
