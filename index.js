import os from "os";
import { getCryptoData } from "./src/service/coinMarketCap.js";

console.log(os.platform(), `total of cores ${os.cpus().length}`);
getCryptoData("BTC");
getCryptoData("ETH");
