import CoreConcepts from './components/CoreConcepts.jsx'
import Header from './components/Header/Header.jsx';
import Examples from './components/Examples.jsx';

function App() { // App component function is only encountred in the beining hence it will only be executed once by default


  return (
    <> {/* we can use fragment if you dont want to render a extra div in the DOM, or keep it empty */}
      <Header />
      <main>
        <CoreConcepts />

        <Examples />

      </main>
    </>
  );
}

export default App;
