//---------Prompt , Confirm and Alert Function
// var input = prompt("Enter your name", "Name");
// var status = confirm("Are you " + input + " ?");
// console.log(status);
// if (status) {
//   alert("You are authorized");
// } else {
//   alert("you are not authorized");
// }

//-----Function Creation and calling
name();
function name() {
  var string = "My name is Abhijeet";
  var employee = [
    { employeeID: 101, employeeName: "Abhi", jobTitle: "UI Developer" },
    { employeeID: 102, employeeName: "Abhi1", jobTitle: "UI Developer" },
    { employeeID: 103, employeeName: "Abhi2", jobTitle: "UI Developer" }
  ];
  var data =
    "<table><tr><th>Employee ID</th><th>Employee Name</th><th>Job Title</th></tr>";
  employee.forEach(function(entry) {
    data +=
      "<tr><td>" +
      entry.employeeID +
      "</td><td>" +
      entry.employeeName +
      "</td><td>" +
      entry.jobTitle +
      "</td></tr>";
  });
  data += "</table>";

  document.getElementById("message").innerHTML =
    "<h2><center>" + string + "</center></h2>";
  document.getElementById("table").innerHTML = data;
}

//Event Handler Method
var btn = document.getElementById("btnOk");

//btn.addEventListener('click', greetMessage);

//Annonymous Function Call
btn.addEventListener("click", function() {
  var name = document.getElementById("txtName").value;
  document.getElementById("spnMessage").innerHTML = "Hello " + name;
});

//Self Function
// // function greetMessage(){
// //     var name= document.getElementById("txtName").value;
// //     document.getElementById("spnMessage").innerHTML = "Hello " + name;
// // }

//---------Event Handler--------------

var btn2 = document.getElementById('changeColor');

function random(number){
    return Math.floor(Math.random()*(number + 1));
}
//btn2.onclick = 
setInterval(function(){
    var rndCol = 'rgb('+ random(255) + ',' + random(255) + ',' + random(255) +')';
    document.getElementById('changeBgColor').style.backgroundColor = rndCol;
}, 500);

btn2.onclick = function(){
    var rndCol = 'rgb('+ random(255) + ',' + random(255) + ',' + random(255) +')';
    event.target.style.backgroundColor = rndCol;
};

function submitLogin(event){
    //event.preventDefault();
    alert("You clicked");
}

document.getElementById("loginFrm").onsubmit = submitLogin;