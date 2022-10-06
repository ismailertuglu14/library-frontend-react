import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./view/home/HomeScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<h1>login</h1>} />
          <Route path="/register" element={<h1>register</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
