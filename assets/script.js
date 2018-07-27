var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var myList = document.getElementById('list');
var story = document.getElementsByTagName('li');

function addItem(){
	var newLi = document.createElement('li');
	newLi.innerHTML = 'Новая';
	newLi.style = 'item';

}
function dellItem(){
	
}

btn1.addEventListener('click', addItem);