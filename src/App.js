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
      {/* About me */}
      <footer>
        {/* <a href="/">top</a> */}
        {/* <a href="mailto: scottd26@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i></a> */}
      </footer>
    </div>
  );
}

export default App;
