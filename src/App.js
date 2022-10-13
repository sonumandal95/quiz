import { Routes, Route} from 'react-router-dom';
import Home from './views/home'
import Question from './views/question'
import Subject from './views/subject'
import Numbers from './views/numbers'
import './App.css';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/question" element={<Question />}/>
        <Route path="/subject" element={<Subject />} />
        <Route path="/numbers" element={<Numbers />} />
      </Routes>
  );
}

export default App;
