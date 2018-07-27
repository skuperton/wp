var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var myList = document.getElementById("list");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close"); 

console.log(btn1);
console.log(story);

function addItem(){
	popup.style.display = "none";
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая";
	newLi.className = "item";
	myList.appendChild(newLi);


}
function dellItem(){
	myList.removeChild(story[0]);
	if(story.length == 0){
	 	popup.style.display = "block";
	}
	
}

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", dellItem);
close.addEventListener("click", closePopup);


