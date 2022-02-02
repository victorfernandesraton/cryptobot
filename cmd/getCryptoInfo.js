import yargs from "yargs";
var argv = yargs(process.argv.slice(1))
  .usage("Usage: $0 <command> [options]")
  .command("get", "Count the lines in a file")
  .example("$0 get -d", "count the lines in the given file")
  .alias("d", "string")
  .nargs("d", 1)
  .describe("d", "get crypto info")
  .demandOption(["d"])
  .help("h")
  .alias("h", "help")
  .epilog("copyright 2019").argv;

console.log(argv.d);
