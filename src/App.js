import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import HomePage from "./Component/homePage/HomePage";
import ProfilePage from "./Component/profilePage/ProfilePage";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="/profilepage/:id" element={<ProfilePage />}></Route>
     
      </Routes>
    </>
  );
}

export default App;

