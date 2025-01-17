import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';

function App() { // App component function is only encountred in the beining hence it will only be executed once by default
  const [selectedTopic, setSelectedTopic] = useState('Please click a button');

  // let tabContent = 'Please click a button';
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'

    setSelectedTopic(selectedButton);
    // tabContent = selectedButton;
    console.log(selectedButton);
  }

  console.log('App Component Executing');

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
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton> {/* passing function as props to allow handleSelect have access to our JSX code */}
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton> {/* in order to be able to pass vairables to fucntion from onSelect and avoid executing it then and there we can create a anonymous function. Now the whole arrow function gets passed to TabButton */}
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
