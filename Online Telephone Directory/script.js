//-----------------ADMIN LOGIN---------------------------------
document.getElementById("frmLogin").onclick = function(event) {
  var username = document.getElementById("txtUsername").value;
  var password = document.getElementById("txtPassword").value;
  if (
    username == null ||
    password == null ||
    username == "" ||
    password == ""
  ) {
    alert("Enter Username or Password");
  } else if (username == "admin" && password == "admin") {
    window.location.href = "UserInfo.html";
  } else {
    alert("User not valid");
  }
};

function TelephoneDirectory() {
  this.appName = "Online Telephone Directory";
  this.version = "1.0";
  this.users = [
    {
      userId: 1,
      username: "admin",
      password: "admin",
      email: "admin@gmail.com",
      mobile: "10000000"
    }
  ];
  this.addUser = function(user) {
    user.userId = this.users.length + 1;
    this.users.push(user);
  };
}

//----------------------------------------------------------
//--------------------OOP-----------------------------------
//----------------------------------------------------------




//const person= {};

const person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interest: ['music','drawing'],
  bio:function(){
    document.write(this.name[0] + ' '+this.name[1] + ' is ' + this.age + ' years old. He likes ' +this.interest[0] + ' and '+ this.interest[1] + '.');
  },

  greeting:function(){
    alert('Hi! !\'m' + this.name[0] + '.');
  }
};

document.getElementById("oppTest").innerHTML = "<span>"+person.bio()+"</span>";
//person.name; 
console.log(person.bio());