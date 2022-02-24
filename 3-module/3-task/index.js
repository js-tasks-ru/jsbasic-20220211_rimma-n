function camelize(str) {
let arr = new Array(); 
arr = str.split("");
	for(let i=0; i<arr.length; i++){
		if (arr[i]==="-"){
			arr[i+1]=arr[i+1].toUpperCase();
		}	
	}
return arr.filter(function(item) { return item!== '-' }).join('');
}
