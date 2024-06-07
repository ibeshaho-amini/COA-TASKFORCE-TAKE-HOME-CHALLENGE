function transformString(input) {
    let output = '';

    if (input.length % 3 === 0) {
        output = input.split('').reverse().join('');
    }

    if (input.length % 5 === 0) {
        output = input.split('').map(char => char.charCodeAt(0)).join(' ');
    }

    if (input.length % 15 === 0) {
        output = input.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    if (output === '') {
        output = input;
    }

    return output;
}

console.log(transformString("Furniture")); 
console.log(transformString("ComputerWatermelon")); 
console.log(transformString("AppleAppleApple")); 
