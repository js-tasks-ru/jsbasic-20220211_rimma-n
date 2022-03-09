function highlight(table) {

let elements = table.children[1].rows;
	for (let elem of elements){
		let statusElements = elem.cells[3];
        let statusAvailable = statusElements.getAttribute('data-available');
		
		if (statusAvailable =='true'){
			elem.classList.add("available");
			}
		else if (statusAvailable == 'false') {
			elem.classList.add("unavailable");
			}	
		else if (statusAvailable == null) {
			elem.setAttribute("hidden",'true');	
			}	
			
		
	    let genderElements = elem.cells[2];
		let genderMeaning = genderElements.textContent;
	
			if (genderMeaning == 'm'){
				elem.classList.add("male");
			}	
			else if (genderMeaning == 'f'){
				elem.classList.add("female");
			}	

        let ageElements = elem.cells[1];
		let ageMeaning = ageElements.textContent;
		
			if (ageMeaning < 18){
				elem.style.textDecoration = "line-through";
			}			
	}
 }
	
