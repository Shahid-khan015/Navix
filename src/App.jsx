import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AptitudeQuiz from './pages/AptitudeQuiz';
import AICounselor from './pages/AICounselor';
import CareerInfo from './pages/CareerInfo';
import CollegeInfo from './pages/CollegeInfo';
import CompetitiveExam from './pages/CompetitiveExam';
import GameZone from './pages/GameZone';
import PeerConnect from './pages/PeerConnect';
import Timeline from './pages/Timeline';
import Resources from './pages/Resources';
import './index.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200">
        <Header user={user} setUser={setUser} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aptitude" element={<AptitudeQuiz />} />
            <Route path="/counselor" element={<AICounselor />} />
            <Route path="/career-info" element={<CareerInfo />} />
            <Route path="/college-info" element={<CollegeInfo />} />
            <Route path="/competitive-exam" element={<CompetitiveExam />} />
            <Route path="/game-zone" element={<GameZone />} />
            <Route path="/peer-connect" element={<PeerConnect />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;