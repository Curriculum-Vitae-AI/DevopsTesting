import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import CartaDeMotivacao from './pages/CartaDeMotivacao';
import Vagas from './pages/Vagas';
import SobreNos from './pages/SobreNos';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Roadmap" element={<Roadmap />} />
        <Route path="/CartaDeMotivacao" element={<CartaDeMotivacao />} />
        <Route path="/Vagas" element={<Vagas />} />
        <Route path="/SobreNos" element={<SobreNos />} />
      </Routes>
    </Router>
    
  );
}

export default App;
