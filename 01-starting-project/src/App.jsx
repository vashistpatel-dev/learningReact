import { useState, Fragment } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() { // App component function is only encountred in the beining hence it will only be executed once by default
  const [selectedTopic, setSelectedTopic] = useState(null);

  // selectedButton => 'components', 'jsx', 'props', 'state'
  function handleSelect(selectedButton) {

    setSelectedTopic(selectedButton);
    // tabContent = selectedButton;
    console.log(selectedButton);
  }

  console.log('App Component Executing');

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <> {/* we can use fragment if you dont want to render a extra div in the DOM, or keep it empty */}
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcepts key={conceptItem.title} {...conceptItem} />))} {/* reducing repetitive code and making it dynamic */}
            {/* <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>

        <section id='examples'>
          <menu>
            <TabButton onSelect={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton> {/* passing function as props to allow handleSelect have access to our JSX code */}
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton> {/* in order to be able to pass vairables to fucntion from onSelect and avoid executing it then and there we can create a anonymous function. Now the whole arrow function gets passed to TabButton */}
            <TabButton onSelect={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>

          {/* the && operator here will output the code after it if the condition before it is true */}
          {/*{!selectedTopic && <p>Please select a topic.</p>}*/} {/* If the selectedTopic is NOT selected is true then show <p> tag or else null */}
          {/* {selectedTopic ? (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          ) : null}  */}
          {/* If the selectedTopic is selected then show the code... or else keep null */}
          {/* we can make the above chunk of code even leaner by using vairbales */}
          {tabContent}
        </section>

      </main>
    </>
  );
}

export default App;
