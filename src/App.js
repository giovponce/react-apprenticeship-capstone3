import './App.css';
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';
import { StyledContainer } from './Utils/Styled Components/StyledContainer';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase-config';

function App() {

  const [user, setUser] = useState({});
  const [term, setTerm] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    let isMounted = true;
    if(isMounted){
        setUser(currentUser);
    }
    return () => { isMounted = false };

});

  const getSearchResult = (newSearch) => {
    console.log(newSearch);
    setTerm(newSearch)
  }

  return (
    <BrowserRouter>
      <Header user={user} getSearchResult={getSearchResult} />
      <StyledContainer>
        {user ? (
          <Switch>
            <Route exact path="/">
              <Home term={term}/>
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/archive">
              <Archive term={term} />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
        </Switch>
        )}
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;