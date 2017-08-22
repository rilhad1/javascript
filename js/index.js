const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const solution = solveQuadr(a, b, c);
document.write(solution);

function discr(a, b, c) {
    return b * b - 4 * a * c;
}

function solveQuadr(a, b, c) {
    const d = discr(a, b, c);
    let x1, x2;
    if (d > 0) {
        x1 = ((-1 * b) + Math.sqrt(d)) / (2 * a);
        x2 = ((-1 * b) - Math.sqrt(d)) / (2 * a);

    }
    else if (d === 0) {
        x1 = (-1 * b) / (2 * a);
        x2 = x1;
    }
    else {
        document.write('Коренів немає')
    }
    return 'x1 = ' + x1 + ', x2= ' + x2;
    return [x1, x2];
}
