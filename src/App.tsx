import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Calendar from "./components/Calendar";
import "./App.css";

const App: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <Navbar />
      <div className="container">
        <Menu />
        <Calendar date={date} setDate={setDate} />
        <img src="/img/sektionslogotyp_vit.png" alt="home" className="loggo" />
      </div>
      <footer>
        <p className="footer-text">Vogue-23</p>
      </footer>
    </div>
  );
};

export default App;
