
import '../styles/App.scss';
import quotes from '../data/quotes.json';
import { useState } from 'react';


function App () {
  const [data, setData] = useState(quotes);
  const [newQuote, setNewQuote] = useState({ quote: "", character: "" })

  const htmlData = data.map(quotes => {
    return (<li >
      <p>{quotes.quote} - <span className='colorCharacter'>{quotes.character}</span></p>

    </li>)
  })

  const handleNewQuote = ((ev) => {
    setNewQuote({
      ...newQuote, [ev.target.id]: ev.target.value
    })
    console.log(ev.target)
  });

  const handleClick = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);
    setNewQuote({ quote: "", character: "" })
  }


  return (
    <div className="App">
      <header>
        <h1 className='titleStyle'>Frases de Friends</h1>
      </header>
      <main>
        <ul className="styleQuote">
          {htmlData}
        </ul>
        <form className='formStyle'>
          <p>Añadir una nueva frase</p>
          <label htmlfor="quote">Frase</label>
          <input type="text" name="quote" id="quote" onChange={handleNewQuote}></input>
          <label htmlfor="character">Personaje</label>
          <input type="text" name="character" id="character" onChange={handleNewQuote}></input>
          <button type="submit" onClick={handleClick}>Añadir una nueva frase</button>
        </form>

      </main>

    </div>
  );
}

export default App;
