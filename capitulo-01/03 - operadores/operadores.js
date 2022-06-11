document.write('<b>VEJA O CÓDIGO FONTE PARA VISUALIZAR EXEMPLOS DE OPERADORES DE ATRIBUIÇÃO</b>')
document.write('</br>')
document.write('</br>')
document.write('ABRA O CONSOLE DO BROWSER PARA VISUALIZAR EXEMPLOS DOS OUTROS OPERADORES')

var num = 0;
num = num + 3;
num = num * 2;
num = num / 1;
num++;
num--;
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('Valor atual da variavel "num": ' + num);

console.log('\n');
console.log('OPERADORES DE COMPARAÇÃO');
console.log('num == 1: ' + (num == 1)); // Comparação de valor
console.log('num === 1: ' + (num === 1)); // Comparação de valor E tipo do objeto
console.log('num != 1: ' + (num != 1));
console.log('num > 1: ' + (num > 1));
console.log('num < 1: ' + (num < 1));
console.log('num >= 1: ' + (num >= 1));
console.log('num <= 1: ' + (num <= 1));

console.log('\n');
console.log('OPERADORES LÓGICOS');
console.log('true && false: ' + (true && false));
console.log('true || false: ' + (true || false));
console.log('!true ' + (!true));

console.log('\n');
console.log('OPERADORES BIT A BIT (BITWISE)');
console.log('5 & 1: ' + (5 & 1));
console.log('5 | 1: ' + (5 | 1));
console.log('~5: ' + (~5));
console.log('5 ^ 1: ' + (5 ^ 1));
console.log('5 << 1: ' + (5 << 1));
console.log('5 >> 1: ' + (5 >> 1));
