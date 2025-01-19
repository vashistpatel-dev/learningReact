import { useState } from 'react';
import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(null);

    // selectedButton => 'components', 'jsx', 'props', 'state'
    function handleSelect(selectedButton) {

        setSelectedTopic(selectedButton);
        // tabContent = selectedButton;
        console.log(selectedButton);
    }

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
        <Section title='Examples' id='examples'>
            <Tabs buttons={
                <>
                    <TabButton onClick={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton> {/* passing function as props to allow handleSelect have access to our JSX code */}
                    <TabButton onClick={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton> {/* in order to be able to pass vairables to fucntion from onSelect and avoid executing it then and there we can create a anonymous function. Now the whole arrow function gets passed to TabButton */}
                    <TabButton onClick={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                    <TabButton onClick={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>

            {/*
            <menu>
                <TabButton onClick={() => handleSelect('components')} isSelected={selectedTopic === 'components'}>Components</TabButton>  passing function as props to allow handleSelect have access to our JSX code 
                <TabButton onClick={() => handleSelect('jsx')} isSelected={selectedTopic === 'jsx'}>JSX</TabButton>  in order to be able to pass vairables to fucntion from onSelect and avoid executing it then and there we can create a anonymous function. Now the whole arrow function gets passed to TabButton 
                <TabButton onClick={() => handleSelect('props')} isSelected={selectedTopic === 'props'}>Props</TabButton>
                <TabButton onClick={() => handleSelect('state')} isSelected={selectedTopic === 'state'}>State</TabButton>
            </menu> 
            */}

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
        </Section>
    );
}