import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import NotFound from './Pages/NotFound';
import { StyledContainer } from './Utils/Styled Components/StyledContainer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <StyledContainer>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/archive">
              <Archive />
            </Route>
            <Route exact path="*">
              <NotFound />
            </Route>
        </Switch>
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;