function checkSpam(str) {
	let s1 = '1xBet';
	let s2 = 'XXX';
	let res = null;
	s1 = s1.toUpperCase();
	s2 = s2.toUpperCase();
	str = str.toUpperCase(); 
	res = str.includes(s1)||str.includes(s2);
	
	return res;
}

checkSpam(str);