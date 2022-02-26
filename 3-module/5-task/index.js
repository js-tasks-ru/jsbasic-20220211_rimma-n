function getMinMax(str) {
str = str.split(' ');
str = str
     .map(num => num = Number(num))
	 .filter(num1 => (!isNaN(num1))&&(isFinite(num1)));
		
let min = Math.min.apply(null, str);
let max = Math.max.apply(null, str);		
		return str = {min,max};

}
