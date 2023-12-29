import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { EmojiList } from './features/emojiList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmojiList />} />
        {/* Define more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
