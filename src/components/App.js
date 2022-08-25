
import '../styles/App.scss';
//import quotes from '../data/quotes.json';
import { useState, useEffect } from 'react';
import getDataApi from '../services/fetch';


function App () {
  const [data, setData] = useState([]);
  const [newQuote, setNewQuote] = useState({ quote: "", character: "" })

  useEffect(() => {
    getDataApi().then((data) => {
      setData(data);
    });
  }, []);

  const htmlData = data.map((data, index) => {
    return (<li key={index} >
      <p>{data.quote} - <span className='colorCharacter'>{data.character}</span></p>

    </li>)
  })

  const handleNewQuote = ((ev) => {
    setNewQuote({
      ...newQuote, [ev.target.id]: ev.target.value
    })

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
        <form className="formStyle">
          <label htmlFor="character">
            Filtrar por frase </label>
          <input
            type="text"
            name="quote"
            id="quote"
          /* value={filterQuote}
           onChange={handleFilterQuote}*/
          />

          <label htmlFor="character">
            Filtrar por personaje </label>
          <select
            className=""
          /* onChange={handleFilterCharacter}
           value={filterCharac}*/
          >
            <option value="all">Todos</option>
            <option value="Ross">Ross</option>
            <option value="Monica">Monica</option>
            <option value="Joey">Joey</option>
            <option value="Phoebe">Phoebe</option>
            <option value="Chandler">Chandler</option>
            <option value="Rachel">Rachel</option>
          </select>

        </form>
      </header>

      <main>
        <ul className="styleQuote">
          {htmlData}
        </ul>
        <form className='formStyle'>
          <p>Añadir una nueva frase</p>
          <label htmlFor="quote">Frase</label>
          <input type="text" name="quote" id="quote" value={newQuote.quote} onChange={handleNewQuote}></input>
          <label htmlFor="character">Personaje</label>
          <input type="text" name="character" id="character" value={newQuote.character} onChange={handleNewQuote}></input>
          <button type="submit" onClick={handleClick}>Añadir una nueva frase</button>
        </form>

      </main>

    </div>
  );
}

export default App;
