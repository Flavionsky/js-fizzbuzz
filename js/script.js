
for (var i=1; i <=100 ; i++){

  var buzzListEl = document.getElementById("buzzList");

if(i % 5 == 0 && i % 3 == 0) {
    buzzListEl.innerHTML +="<li>FizzBuzz</li>";
  } else if(i % 5 == 0){
    buzzListEl.innerHTML += "<li>Buzz</li>";
  }else if(i % 3 == 0){
    buzzListEl.innerHTML += "<li>Fizz</li>";
  } else{
    buzzListEl.innerHTML +="<li>"+ i +"</li>";
  }
}
