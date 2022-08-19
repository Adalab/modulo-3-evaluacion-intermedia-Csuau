
import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';

function App () {
  const [data, setData] = useState(quotes);

  const htmlData = data.map(quotes) => {
    return (<li>
      <p>{quotes.quote}</p>
      <p>{quotes.character}</p>
    </li>)

  }
  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <ul>
          {htmlData}
        </ul>
      </main>

    </div>
  );
}

export default App;
