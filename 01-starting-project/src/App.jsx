import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  function handleSelect() {
    console.log("Hello World! - selected");
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <menu>
            <TabButton onSelect={handleSelect}>Components</TabButton> {/* passing function as props to allow handleSelect have access to our JSX code */}
            <TabButton onSelect={handleSelect}>JSX</TabButton>
            <TabButton onSelect={handleSelect}>Props</TabButton>
            <TabButton onSelect={handleSelect}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
