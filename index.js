import logParse from './log-parser.js';

import fs from 'fs';

import readline from 'readline';

(async () => {
  const logFile =
    process.argv.slice(2)[0] || 'programming-task-example-data.log';

  console.log(`process log file: ${logFile}`);

  const fileStream = fs.createReadStream(logFile);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const ipCountMap = new Map();
  const urlCount = new Map();

  for await (const line of rl) {
    const logLine = logParse(line);
    updateCount(ipCountMap, logLine.ip);
    updateCount(urlCount, logLine.url);
  }

  console.log('-----------------------------------------------------------');
  console.log('The number of unique IP addresses:', ipCountMap.size);
  console.log('The top 3 most active IP addresses:', getTop3Counts(ipCountMap));
  console.log('The top 3 most visited URLs:', getTop3Counts(urlCount));
  console.log('-----------------------------------------------------------');
})().catch((e) => {
  console.error(e);
});

const updateCount = (map, key) => {
  if (map.get(key)) {
    map.set(key, +map.get(key) + 1);
  } else {
    map.set(key, 1);
  }
};

const getTop3Counts = (map) => {
  const countFields = [...new Set(map.values())]
    .sort((v1, v2) => v2 - v1)
    .slice(0, 3)
    .map((v) => ({ visited: v }))
    .map((cf) => {
      map.forEach((mv, mk) => {
        if (+mv === +cf.visited) {
          cf.fields = cf.fields ? [...cf.fields, mk] : [mk];
        }
      });
      return cf;
    });

  return countFields;
};
