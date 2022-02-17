function truncate(str, maxlength) {	
	let result;
		if (str.length > maxlength) {
			return result = str.slice(0, maxlength - 1) + "…";
		} else {
			return result = str;
		}
}	
	
