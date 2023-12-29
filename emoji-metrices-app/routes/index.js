import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import EmojiList from "../features/EmojiList"; // Import your EmojiList component
import EmojiDetail from "../features/EmojiDetail"; // Import your EmojiDetail component
import Layout from "./Layout"; // Assuming you have a Layout component

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route element={<Layout />}>
          <Route path="/" element={<EmojiList />} />
          <Route path="/emoji/:emojiId" element={<EmojiDetail />} />
        </Route>
        <Route path="*" element={<p>Page Not Found</p>} />
      </Router>
    </BrowserRouter>
  );
};
