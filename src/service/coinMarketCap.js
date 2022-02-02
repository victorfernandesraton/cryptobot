import fetch from "node-fetch";

export default class CoinMarketCapService {
  url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info";
  methods = {
    GET: "GET",
  };
  constructor(key) {
    this.headers = { "X-CMC_PRO_API_KEY": key };
    this.key = key;
  }

  async getCryptoData(symbol) {
    try {
      const result = await fetch(`${this.url}?symbol=${symbol}`, {
        method: this.methods.GET,
        headers: { ...this.headers },
      });
      const data = await result.json();
      return this.parseResponseData(data.data, symbol);
    } catch (error) {
      throw new Error("error request");
    }
  }
  parseResponseData(data, symbol = "") {
    const values = data[symbol.toUpperCase()];

    return { name: values.name, symbol: values.symbol };
  }
}
