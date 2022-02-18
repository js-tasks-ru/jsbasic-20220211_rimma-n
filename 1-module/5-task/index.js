function truncate(str, maxlength) {	
	let newStr;
		if (str.length > maxlength) {
			return newStr = str.slice(0, maxlength - 1) + "…";
		} else {
			return newStr = str;
		}
}	
	
