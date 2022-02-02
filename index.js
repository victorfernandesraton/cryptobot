import os from "os";
import CoinMarketCapService from "./src/service/coinMarketCap.js";

const sevice = new CoinMarketCapService("0e3ce94d-7ef6-44da-83d5-dba193390990");

const response = await sevice.getCryptoData("BTC");

console.log(response);
