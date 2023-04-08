import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage}></Route>
    </Routes>
  );
}

export default App;
