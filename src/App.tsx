import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServerPage from './pages/Server';
import NetworkingPage from './pages/Networking';
import Experience from './pages/Experience';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-zinc-900 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/server/:type" element={<ServerPage />} />
            <Route path="/networking/:type" element={<NetworkingPage />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        
        <footer className="bg-zinc-50 border-t border-zinc-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">G</span>
              </div>
              <span className="font-bold text-zinc-900">Catatan Guru IT</span>
            </div>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Catatan Guru IT. Dibuat dengan semangat berbagi.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}
