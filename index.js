import os from "os";

console.log(os.platform(), `total of cores ${os.cpus().length}`);
