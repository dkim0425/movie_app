import { useState, useEffect, useRef } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState(0);
  const [coins, setCoins] = useState([]);
  const money = useRef(0);
  const inputRef = useRef(null);

  const coinPrice = (coin) => coin.quotes.USD.price * 1388.18;

  function howManyCoins(coin) {
    if (money.current > 0) {
      return (
        (money.current / coinPrice(coin)).toFixed(0) + "개 살 수 있습니다."
      );
    } else {
      return coinPrice(coin) + " 원";
    }
  }

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const handleConfirm = () => {
    const value = Number(inputRef.current.value);
    money.current = Number.isFinite(value) ? value : 0;
    setCoins([...coins]);
  };

  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>

      <div>
        <input
          type="number"
          ref={inputRef}
          placeholder="보유 금액을 입력하세요."
        />
        <button onClick={handleConfirm}>확인</button>
      </div>

      {loading ? (
        <strong>
          Loading
          {Array.from({ length: dots }).map((_, i) => (
            <span key={i}>.</span>
          ))}
        </strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <li key={coin.id}>
              {coin.name} ({coin.symbol}): {howManyCoins(coin)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;