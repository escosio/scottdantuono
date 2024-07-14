import "./css/App.css";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
// import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Projects />
              <Skills />
            </>
          }
        />
        <Route path="/projects" element={<Projects />}>
          Test
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <footer>
        <p>
          Made with React.js in 2023 |{" "}
          <a
            style={{ color: "white" }}
            href="https://github.com/escosio/scottdantuono"
          >
            github
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
