import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [dolar, setDolar] = useState(0);
  const [colon, setColon] = useState(0);
  const [bitcoin, setBitcoin] = useState(0);
  const [euro, setEuro] = useState(0);
  const [yen, setYen] = useState(0);

  const [tipoMoneda, setTipoMoneda] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setDolar( (total * 1) / tipoMoneda );
    setColon((total * 8.75) / tipoMoneda);
    setBitcoin((total * 0.000021782) / tipoMoneda);
    setEuro((total * 0.851566) / tipoMoneda);
    setYen((total * 110.28) / tipoMoneda);
  }, [total, tipoMoneda]);
 

  const handleTotalChange = e => {
    if (!isNaN(e.target.value)) {
      setTotal(e.target.value);
    }
  };


  return (
    <div className="App">
      <h1>Convertidor de Divisas</h1>

      <p>Dólar Americano: { dolar }</p>
      <p>Colón: { colon }</p>
      <p>Bitcoin: { bitcoin }</p>
      <p>Euro: { euro }</p>
      <p>Yen japonés: { yen }</p>

      <hr />

      <h3>{total}</h3>

      <select onChange={event => setTipoMoneda(event.target.value)} value={tipoMoneda}>
        <option value={1}>Dólar Americano</option>
        <option value={8.75}>Colón</option>
        <option value={0.000021782}>Bitcoin</option>
        <option value={0.851566}>Euro</option>
        <option value={110.28}>Yen Japonés</option>
      </select>
      <input onChange={handleTotalChange} value={total} />
    </div>
  );
}

export default App;
