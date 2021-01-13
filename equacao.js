function teste() {
   let a = 0, b = 0, c = 0, delta = 0, x1 = 0, x2 = 0;
   a = parseInt(document.getElementById('a').value);
   b = parseInt(document.getElementById('b').value);
   c = parseInt(document.getElementById('c').value);
    delta = b**2 - 4 * a * c;
console.log(delta);

x1 = -b + Math.sqrt(delta);
x1 = x1 / 2 * a;
document.getElementById('x1').innerHTML = 'X1 =' + x1;
x2 = -b - Math.sqrt(delta);
x2 = x2/ 2 * a;
document.getElementById('x2').innerHTML = 'X2 =' + x2;
}
