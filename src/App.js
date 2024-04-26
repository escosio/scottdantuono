import "./css/App.css";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      {/* TODO add carrots to open section bodies */}
      <Projects />
      <Skills />
      {/* <About /> */}
      <footer>
        <p>Made with React.js in 2023 | <a style={{"color":"white"}} href="https://github.com/escosio/scottdantuono">github</a> </p>
      </footer>
    </div>
  );
}

export default App;
