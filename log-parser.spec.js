import logParser from './log-parser.js';

describe('test parsing', () => {
  test('should parse log line', () => {
    const log =
      '50.112.00.11 - admin [11/Jul/2018:17:31:56 +0200] "GET /asset.js HTTP/1.1" 200 3574 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64)"';

    const logLine = logParser(log);
    expect(logLine).toEqual({
      ip: '50.112.00.11',
      userName: 'admin',
      bytes: '3574',
      dataTime: '11/Jul/2018:17:31:56 +0200',
      status: '200',
      url: '/asset.js',
      userAgent: 'Mozilla/5.0 (Windows NT 6.1; WOW64)',
    });
  });
});
