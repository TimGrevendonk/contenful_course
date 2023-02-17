import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/navbar";
import Footer from "./components/footer";
import NameList from "./pages/name_list";
import Home from "./pages/home";
import About from "./pages/about";

function Main() {
  const [studentNames, setStudentNames] = useState([
    "Lewis",
    "Ravs",
    "Zylush",
    "Ben",
    "Ped",
    "Ducan",
  ]);

  function voteKill(votedName) {
    console.log("[debug]", votedName);
    setStudentNames(
      studentNames.map((name) => (name === votedName ? votedName + "|" : name))
    );
  }

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/about"} element={<About></About>}></Route>
        <Route
          path={"/names"}
          element={
            <NameList students={studentNames} onVoteKill={voteKill}></NameList>
          }
        ></Route>

        {/* Older tutorial: */}
        {/* <NameList students={["Sam", "Bill"]}></NameList> */}
        {/* <NameList students={["Mike", "Tony"]}></NameList> */}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Main></Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
