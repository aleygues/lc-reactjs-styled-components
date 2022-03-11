import './App.css';
import { Container } from './components/Container';
import { Wilder } from './Wilder';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form } from './Form';


function App() {
  // Hooks → commencent use...
  // useState + useEffect
  // [monÉtatActuel, mettreÀJourMonÉtat]
  const [wilders, setWilders] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Variables qui définissent des FONCTIONS
  const getWilders = async () => {
    try {
      // envoyer une requête HTTP à l'API
      const { data } = await axios.get('http://127.0.0.1:4000/api/wilders');
      setWilders(data);
    } catch {
      setHasError(true);
    }
  };

  useEffect(() => {
    getWilders();
    // return () => {};
  }, []);

  useEffect(() => {
    console.log("Got update");
  }, [wilders]);

  // Return JSX
  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
          <button onClick={() => getWilders()}>Update</button>
        </Container>
      </header>
      <Container>
        <h2>Formulaire de création de Wilder</h2>
        <button onClick={() => setShowForm(!showForm)}>Toggle Form</button>
        {showForm === true && <Form onWilderCreated={() => getWilders()} onError={() => setHasError(true)}></Form>}
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
