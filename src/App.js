import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import Archive from './Pages/Archive';
import Login from './Pages/Login';
import { StyledContainer } from './Utils/Styled Components/StyledContainer';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <StyledContainer>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/archive" element={<Archive />}/>
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
}

export default App;