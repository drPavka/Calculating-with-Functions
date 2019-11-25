const f = require('../index');


test('7*5', () => {
    expect(f.seven(f.times(f.five()))).toBe(35);
});
test('4+9', () => {
    expect(f.four(f.plus(f.nine()))).toBe(13);

});
test('8-3', () => {
    expect(f.eight(f.minus(f.three()))).toBe(5);
});
test('6 div 2', () => {
    expect(f.six(f.dividedBy(f.two()))).toBe(3);
});
