import yargs from "yargs";
import { getCryptoData } from "../src/service/coinMarketCap.js";
var argv = yargs(process.argv.slice(1))
  .usage("Usage: $0 <command> [options]")
  .command("get", "Count the lines in a file")
  .example("$0 get -s", "count the lines in the given file")
  .alias("s", "string")
  .nargs("s", 1)
  .describe("s", "get crypto symbol info")
  .demandOption(["s"])
  .help("h")
  .alias("h", "help")
  .epilog("copyright 2019").argv;

getCryptoData(argv.s);
