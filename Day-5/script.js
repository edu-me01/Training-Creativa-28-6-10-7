function getID() {
  var id = document.getElementById("elementById");
  id.innerText = "Hello World";
  id.style.backgroundColor = "red";
}
function getClassName() {
  var classes = document.getElementsByClassName("class-demo");
  classes[0].style.color = "red";
  classes[1].style.color = "red";
}

function query() {
  var query = document.querySelector(".demo-element  p");
  query.style=""
  //  query.style.padding="20px";
  query.classList.add("query");
}
function queryy() {
  var query = document.querySelector(".demo-element  p");
  // query.style.color="blue";
  //  query.style.padding="20px";
   query.style.transition="all 1s";
  query.classList.remove("query");
 
}
