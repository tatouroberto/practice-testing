const capitalize = require('./example4');

test('Should return the first element of the string capitalized', () => {
    expect(capitalize("hello")).toBe("Hello");
})