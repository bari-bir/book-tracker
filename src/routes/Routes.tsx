import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Notes from "../pages/Notes";
import Book from "../pages/Book";
import Timer from "../pages/Timer";
import NotesList from "../pages/NotesList";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/notes/:id" element={<Notes />} />
        <Route path="/list/:id" element={<NotesList />} />
        <Route path="/book" element={<Book />} />
        <Route path="/timer/:id" element={<Timer />} />
      </Routes>
    </Router>
  );
};

export default Routers;
