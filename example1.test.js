const stringLength = require('./example1');

test('count the string elemnts', () => {
    expect(stringLength("Hello")).toBe(5);
})