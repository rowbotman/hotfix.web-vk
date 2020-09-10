export const isTimeLight = (time = '') => /^([0-1][0-9]|[2][0-3]):([0-5]?[0-9])$/.test(time);

export const validate = (input = '', prevLen = 0) => {
    if (input.length < 3) {
        input = input.replace(/\D/g, '');
    }
    console.log(input, input.length);
    if (input.length === 2) {
        console.log(/([0-1][0-9]|[2][0-3])/.test(input));
        if (!/([0-1][0-9]|[2][0-3])/.test(input)) {
            console.log(input.slice(0, 1));
            return input.slice(0, 1);
        }
    }
    if (prevLen > input.length && input.length === 3) {
        input = input.slice(0, 2);
    } else if (input.length > 1 && input[2] !== ':') {
        input = input.slice(0, 2) + ':' + input.slice(2, 4);
    }
    if (input.length > 3) {
        if (!isTimeLight(input)) {
            const numeric = input.replace(/\D/g, '');
            input = numeric.slice(0, 2) + ':' + numeric.slice(2, 4);
        }
    }
    return input;
};
