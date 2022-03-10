import './App.css';
import { Container } from './components/Container';
import { Wilder } from './Wilder';

const wilders = [
  {
    name: 'Aurélien', city: 'Villeurbanne', skills: [
      { title: 'NodeJS', votes: 13 },
      { title: 'ReactJS', votes: 15 },
    ]
  },
  {
    name: 'Bob', city: 'Lyon', skills: [
      { title: 'HTML', votes: 13 },
      { title: 'PHP', votes: 33 },
    ]
  }
];

function App() {
  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </header>
      <Container>
        <h2>Wilders</h2>
        <section className="card-row">
          {
            wilders.map((wilder, index) =>
              <Wilder
                key={index}
                // donne moi toutes les props de wilder
                {...wilder} // strictement équivalente aux 3 lignes en dessous
                //name={wilder.name}
                //city={wilder.city}
                //skills={wilder.skills} 
              />)
          }
        </section>
      </Container>
      <footer>
        <Container>
          <p>&copy; 2022 Wild Code School</p>
        </Container>
      </footer>
    </div>

  );
}

export default App;
