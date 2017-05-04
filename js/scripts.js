var list = document.getElementById("list");
var add = document.getElementById("addElem");

add.addEventListener("click", function() {
	var liNumber = list.getElementsByTagName("li").length;
	list.innerHTML += "<li>item " + liNumber + "</li>";
	}
);