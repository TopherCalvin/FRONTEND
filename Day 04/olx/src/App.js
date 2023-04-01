import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import { Recom } from "./components/rekomendasi";
import { Card } from "./components/card";
import HomePage from "./pages/Home";
import TestPage from "./pages/Test";
import { Route, Routes } from "react-router-dom";
import CustomHooksPage from "./pages/CustomHooks";
import ToDoListPage from "./pages/ToDoList";
import OrderList from "./pages/Receipt";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="test" element={<TestPage />}></Route>
        <Route path="custom" element={<CustomHooksPage />}></Route>
        <Route path="list" element={<ToDoListPage />}></Route>
        <Route path="order" element={<OrderList />}></Route>
      </Routes>
    </>
  );
}

export default App;
