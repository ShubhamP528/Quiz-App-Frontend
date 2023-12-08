import './App.css';
import Home from './Component/Home';
import LandingPage from './Component/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import QuestionList from './Component/QuestionList';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/question/:id' element={<QuestionList/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
