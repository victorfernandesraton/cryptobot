import fetch from "node-fetch";

export function getCryptoData(symbol) {
  let url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info" +
    "?symbol=" +
    symbol;
  let options = {
    method: "GET",
    headers: { "X-CMC_PRO_API_KEY": "0e3ce94d-7ef6-44da-83d5-dba193390990" },
  };
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
}
