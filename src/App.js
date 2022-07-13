import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from "./pages/Game";
import Board from "./pages/Board";
import Home from "./pages/Home";

import { ScoreProvider } from "./contexts/Context";

function App() {
  return (
    <ScoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="board" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </ScoreProvider>
  );
}

export default App;
