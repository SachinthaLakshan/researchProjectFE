import logo from './logo.svg';
import './App.css';
import PaperPage from './pages/paper/PaperPage';
import LoginPage from './pages/Login/LoginPage';
import InterviewsPage from './pages/Interviews/InterviewsPage';
import StartPage from './pages/start/StartPage';
import QuestionPaperPage from './pages/questionPaper/QuestionPaperPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* <PaperPage/> */}
      {/* {<QuestionPaperPage />} */}
      {/* <LoginPage/> */}
      {/* <InterviewsPage/> */}
      {/* <StartPage/> */}
      <BrowserRouter>


        <Routes>


          <Route

            path="/"

            element={<LoginPage/>} />
          <Route

            path="/paper"

            element={<QuestionPaperPage />} />
          <Route

            path="/interviews"

            element={<InterviewsPage />} />
             <Route

path="/start"

element={<StartPage />} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
