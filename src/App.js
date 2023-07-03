import { Routes, Route} from 'react-router-dom';
import Home from './views/home'
import Question from './views/question'
import Round from './views/round'
import Numbers from './views/numbers'
import BuzzerRound from './views/buzzerRound'
import './App.css';

function App() {
  return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/question" element={<Question />}/>
        <Route path="/round" element={<Round />} />
        <Route path="/numbers/:round" element={<Numbers />} />
        <Route path="/buzzerRound" element={<BuzzerRound />} />
      </Routes>
  );
}

export default App;
