import "./App.css";
import Header from "./components/header/header";
import AddKeeper from "./components/addKeeper/addKeeper";
import ShowKeeper from "./components/showkeeper/showKeeper";
import About from "./components/About.js";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import axios from "axios"

function App() {
  const [keeperList, setKeeperList] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* <AddKeeper keeperList={keeperList} setKeeperList={setKeeperList} /> */}
          <Route path="/show-tasks" element={<ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />} />
          <Route path="/TaskManager" element={<AddKeeper setKeeperList={setKeeperList} />} />
          {/* <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} /> */}
          <Route path="/about" element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
