const [zero, one, two, three, four, five, six, seven, eight, nine] = Array.from(Array(10))
    .map((_, i) => {
        return (f) => (typeof f == 'function') ? f(i) : i;
    });

const [plus, times, minus, dividedBy] = Array(
    (b) => (a) => a + b,
    (b) => (a) => a * b,
    (b) => (a) => a - b,
    (b) => a => ~~(a / b)
);

module.exports = {dividedBy, eight, five, four, minus, nine, one, plus, seven, six, times, zero, three, two};
