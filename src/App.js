import "./css/App.css";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      {/* TODO add carrots to open section bodies */}
      <Projects />
      <Skills />
      <footer>
      {/* About me */}
        {/* <div className="footer-top">
          <div>
            <h3>About me</h3>
            <p>I live in Brooklyn, NY and </p>
          </div>
          <div>
            <Contact />
          </div>
        </div> */}
        <p>Built in React.js in 2023</p>
      </footer>
    </div>
  );
}

export default App;
