import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Greeting from "./page/greeting/Greeting";
import Home from "./page/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/greet" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
