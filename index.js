const _number = function (result, _arguments) {
    const args = Array.from(_arguments);
    let _function= (r) => r;
    if (args.length && typeof args[0] == 'function') {
        _function = args[0]
   }

    return _function(result);
};

function zero() {
    return _number(0, arguments);
}

function one() {
    return _number(1, arguments);
}

function two() {
    return _number(2, arguments);
}

function three() {
    return _number(3, arguments);
}

function four() {
    return _number(4, arguments);
}

function five() {
    return _number(5, arguments);
}

function six() {
    return _number(6, arguments);
}

function seven() {
    return _number(7, arguments);
}

function eight() {
    return _number(8, arguments);
}

function nine() {
    return _number(9, arguments);
}

function plus() {
    const [b] = Array.from(arguments);
    return (a) => a + b;
}

function minus() {
    const [b] = Array.from(arguments);
    return (a) => a - b;
}

function times() {
    const [b] = Array.from(arguments);
    return (a) => a * b;
}

function dividedBy() {
    const [b] = Array.from(arguments);
    return (a) => ~~(a/b);
}

module.exports = {dividedBy, eight, five, four, minus, nine, one, plus, seven, six, times, zero, three, two};
