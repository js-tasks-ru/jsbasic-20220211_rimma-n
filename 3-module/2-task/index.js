function filterRange(arr, a, b) {
	return arr.filter(res => res <= Math.max(a,b)&&res >= Math.min(a,b))
	
}
