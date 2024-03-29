import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Notes from "../pages/Notes";
import Book from "../pages/Book";
import Timer from "../pages/Timer";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/book" element={<Book />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </Router>
  );
};

export default Routers;
