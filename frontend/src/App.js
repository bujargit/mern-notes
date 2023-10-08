import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import LandingPage from "./screens/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header setSearch={setSearch} />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/createnote" element={<CreateNote />} />
          <Route path="/note/:id" element={<SingleNote />} />
          <Route path="/mynotes" element={<MyNotes search={search} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
