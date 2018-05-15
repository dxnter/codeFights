const fetchCoin = coinName =>
  fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coinName}&tsyms=USD`)
    .then(data => data.json())
    .then(data => console.log(data))
    .catch(e => console.log(e));

fetchCoin('BTC');

async function asyncCoin(coinName) {
  const data = await fetch(`https://min-api.cryptocompare.com/data/price?fsym=${coinName}&tsyms=USD`)
    .then(res => res.json())
    .then(res => parseInt(Object.values(res)) * 20);
  console.log(data);
}

asyncCoin('BTC');
