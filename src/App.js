import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { About } from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contacts/>
    </div>
  );
}

export default App;
