var result = '';
for (var i = 1; i <= 7; i++) {
	for (var j = 1; j <= i; j++) {
		result = result+'* '
	}
	result = result+"</br>"
}


result += "</br></br>"

for (var i = 1; i <= 7; i++) {
	for (var j = 1; j <= 7; j++) {
		result = result+'* '
	}
	result = result+"</br>"
}
	result += "</br></br>"

for (var i = 1; i <= 7; i++) {
	if(i==1 || i==7){
		for (var j = 1; j <= 7; j++) {
			result = result+'* '
		}
		// result = result+"</br>"
	}
	else{
		for (var j = 1; j <= 7; j++) {
			if(j==1 || j==7){
				result = result+"* "
			}
			else{
				result = result+"&nbsp;&nbsp;&nbsp;"
			}
		}
	}
	result = result+"</br>"	
}
	 

	result += "</br></br>"

for (var i = 7; i >= 1; i--) {
	for (var j = 1; j <= i; j++) {
	 	result = result+"* "
	 }
	 result = result + "</br>"
}	
	 document.write(result) 