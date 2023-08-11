import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import './styles.css';
import BookForm from "./components/BookForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/add" element={<BookForm />} />
      </Routes>
    </BrowserRouter>
  );
}
