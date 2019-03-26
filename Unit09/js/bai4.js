var button = document.getElementsByTagName("button");
var content= document.getElementsByTagName("p");
// var content1=document.getElementsByTagName("h3")
for (var i = 0; i < content.length; i++) {
	button[i].addEventListener("click", function(){
		for (var j = 0; j < content.length; j++) {
			content[j].style.display = "none";
		}
		this.nextElementSibling.style.display="block";
	});
}
// 	for (var i = 0; i < content1.length; i++) {
// 	button[i].addEventListener("click", function(){
// 		for (var j = 0; j < content1.length; j++) {
// 			content1[j].style.display = "none";
// 		}
// 		this.nextElementSibling.style.display="block";
// 	});
// }
