import test from './test.css';
import Sun from '../images/sun.png';


const init = async () => {

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