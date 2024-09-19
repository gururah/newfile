import './App.css';
import LoginPage from './Components/LoginPage';
import Startpage2 from './Components/Startpage2';
// import LoginStyledContainer from './StyledComponents/LoginStyledContainer';
import {BrowserRouter,Routes,Route} from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Startpage2/>}/>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
      </BrowserRouter>
   
  );
}

export default App;
