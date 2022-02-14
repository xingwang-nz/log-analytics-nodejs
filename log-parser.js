const logLineRegex =
  /^([\d.]+) (\S+) (\S+) \[([\w:/]+\s[+-]\d{4})\] \"(.+?)\" (\d{3}) (\d+) \"([^\"]+)\" \"(.+?)\"/;

const parseLog = (line) => {
  const match = line.match(logLineRegex);

  return {
    ip: match[1],
    userName: match[3],
    dataTime: match[4],
    url: match[5].split(' ')[1],
    status: match[6],
    bytes: match[7],
    userAgent: match[9],
  };
};

export default parseLog;
