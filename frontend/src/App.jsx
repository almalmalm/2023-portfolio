import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projectspage from './pages/Projectspage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projectspage />} />
    </Routes>
  );
}

export default App;
