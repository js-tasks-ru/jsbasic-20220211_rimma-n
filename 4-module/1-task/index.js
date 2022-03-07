function makeFriendsList(friends) {
let arr = friends.map(user => user.firstName + ' ' + user.lastName);	
let ul = document.createElement('ul');

	for (let i=0; i<arr.length; i++){
		let li = document.createElement('li');	
		li.innerHTML = arr[i];
	    ul.appendChild(li);	 
    	};	 
    return ul;
};


