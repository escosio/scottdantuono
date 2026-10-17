import "./css/App.css";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
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
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <footer>
        <div className="page">
          <p>
            Made with React in Brooklyn.{" "}
            <a href="https://github.com/escosio/scottdantuono">
              Source on GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
