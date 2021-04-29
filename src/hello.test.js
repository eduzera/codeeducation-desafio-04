const hello = require('./hello');

test('say hello to Eduardo', () => {
  expect(hello("Eduardo")).toBe("Hello, Eduardo");
});