import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title='Componenets' description='The core UI building block.' img={componentsImg} />
            <CoreConcepts title='Componenets' description='The core UI building block.' img={componentsImg} />
            <CoreConcepts title='Componenets' description='The core UI building block.' img={componentsImg} />
            <CoreConcepts title='Componenets' description='The core UI building block.' img={componentsImg} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
