var fruits=['apple','watermelon','orange'];
function loadfruits(){
  document.getElementById("fruits").innerHTML=fruits;
}
function myfun(){
	var fruit = prompt("enter fruits");
	fruits[fruits.length]=fruit;
	document.getElementById("fruits").innerHTML=fruits;
}