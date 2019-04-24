console.log('hello, world');

import css from './css/main.css';

import * as d3 from 'd3';
const square = d3.selectAll('rect');
square.style('fill', 'orange');

import Sun from './images/sun.png';
var sunImage = document.getElementById('sun-image');
sunImage.src = Sun;





// es6 check
function sum(x, y, z) {
	return x + y + z;
}

const numbers = [1,2,3]

console.log(sum(...numbers))