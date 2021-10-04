document.getElementById("More").onclick = function() {myFunction1()};
document.getElementById("Less").onclick = function() {myFunction2()};
document.getElementById("text").onmouseover = function() {myFunction3()};
document.getElementById("text").onmouseout = function() {myFunction4()};

// document.getElementById("More").addEventListener("click",myFunction1);

// document.getElementById("Less").addEventListener("click",myFunction2);

function myFunction1() { 
  document.getElementById("text").style.display = "block";
}

function myFunction2(){
    document.getElementById("text").style.display = "none";
  }

function myFunction3(){
    document.getElementById("text").style.backgroundColor = "green";
  }

  function myFunction4(){
    document.getElementById("text").style.backgroundColor = "#0d6efd";
  }