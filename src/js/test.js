import * as d3 from 'd3';
import test from './test.css';
import Sun from '../images/sun.png';


const init = async () => {
	const square = d3.selectAll('rect');
	square.style('fill', 'orange');

	var sunImage = document.getElementById('sun-image');
	sunImage.src = Sun;

	const numbers = [1,2,3]

	console.log(sum(...numbers))
}


// es6 check
function sum(x, y, z) {
	return x + y + z;
}

export default { init };