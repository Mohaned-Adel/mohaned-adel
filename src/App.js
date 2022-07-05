// import Nav from './components/nav/Nav'
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import References from './components/references/References';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

import './App.css';

function App() {
  return (
    <div>
      {/* <Nav /> */}
      <Header />
      <main>
        <Introduction />
        <About />
        <Skills />
        <References />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
