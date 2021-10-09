import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import * as ROUTES from './constants/routes';
import {Home , Browse, SignIn, SignUp} from './pages'
import {IsUserRedirect, ProtectedRoute} from './helpers/routes';
import { useAuthListener } from './hooks';

function App() {
  const {user} = useAuthListener();
  return (
   <Router basename = "/netflix-clone"><Switch>
      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_IN } 
      exact>
        <SignIn />s
      </IsUserRedirect>

      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE} path = {ROUTES.SIGN_UP } 
      exact>
        <SignUp />s
      </IsUserRedirect>

      <ProtectedRoute user = {user}
                      path = {ROUTES.BROWSE}
                      exact 
      >
        <Browse/>
      </ProtectedRoute>

      <IsUserRedirect user = {user} loggedInPath = {ROUTES.BROWSE}
      path = {ROUTES.HOME}
      >
        <Home/>
      </IsUserRedirect>

    <Route exact path = {ROUTES.HOME}>
      <Home />
    </Route>
</Switch>
    </Router>
  );
}

export default App;
