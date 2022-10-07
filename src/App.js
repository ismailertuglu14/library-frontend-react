import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./view/authenticate/login/Login";
import BookDetail from "./view/book_detail/BookDetail";
import HomeScreen from "./view/home/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
