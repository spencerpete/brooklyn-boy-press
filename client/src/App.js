import { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Layout from './layouts/Layout';
import MainContainer from './contianers/MainContainer';
import { verifyUser, loginUser, registerUser, removeToken } from './services/auth';
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleSignIn = async formData => {
    const userData = await loginUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleSignUp = async formData => {
    const userData = await registerUser(formData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogOut = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  return (
    <div className="App">
      <Layout handleLogOut={handleLogOut} currentUser={currentUser}>
        <Switch>
          <Route path="/sign-up">
            <SignUp handleSignUp={handleSignUp} />
          </Route>
          <Route path="/sign-in">
            <SignIn handleSignIn={handleSignIn} />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
