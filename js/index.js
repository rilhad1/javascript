const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const res = solveQuadr(a, b, c);
document.write(res);

function discr(a, b, c) {
    return b * b - 4 * a * c;
}

function solveQuadr(a, b, c) {
    let x1, x2;
    if (a === 0) {
        if (b === 0) {
            return 'Немає розв`язку';
        }
        else {
            x1 = (-1 * c) / b;
            x2 = x1;
        }
    }
    else {
        const d = discr(a, b, c);
        if (d === 0) {
            x1 = (-1 * b) / (2 * a);
            x2 = x1;

        }
        else if (d > 0) {
            x1 = ((-1 * b) + Math.sqrt(d)) / (2 * a);
            x2 = ((-1 * b) - Math.sqrt(d)) / (2 * a);
        }
        else {
            return 'Немає розв`язку';
        }
    }
    if (x1 === x2) {
        return 'x = ' + x1
    }
    else {
        return 'x1 = ' + x1 + '<br>x2 = ' + x2;
    }
}
