import './App.css';
import LandingPage from './Component/LandingPage';
import { Route, Routes } from 'react-router-dom';
import QuestionList from './Component/QuestionList';
import SignORLog from './Component/SignORLog'
import Homepage from './Component/Homepage';
import ScoreCard from './Component/ScoreCard';
import Leaderboard from './Component/Leaderboard';
import AddQuestion from './Component/AddQuestion';
import CreateQuiz from './Component/CreateQuiz';
import UpdateQuestion from './Component/UpdateQuestion';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/logSig' element={<SignORLog/>}></Route>
        <Route path='/score/:title' element={<ScoreCard/>}></Route>
        <Route path='/question/:title/:id' element={<QuestionList/>}></Route>
        <Route path='/leaderboard/:title' element={<Leaderboard/>}></Route>
        <Route path='/leaderboard/:title' element={<Leaderboard/>}></Route>
        <Route path='/addQuestion' element={<AddQuestion/>}></Route>
        <Route path='/createQuize' element={<CreateQuiz/>}></Route>
        <Route path='/updateQuestionList/:title' element={<UpdateQuestion/>}/>
      </Routes>      
    </div>
  );
}

export default App;
