//Need to change the employee to user for registration and contacts
//------------------STORE OBJECT-------------------------
var store = {
  appName: "Employee Management",
  appVersion: "1.0",
  isAddorEdit: false,
  employeeData: [
    {
      employeeId: 101,
      employeeName: "abhi",
      jobTitle: "Developer",
      salary: 1000
    },
    {
      employeeId: 102,
      employeeName: "abhijeet",
      jobTitle: "Developer1",
      salary: 2000
    }
  ],
  addEmployee: function(employee) {
    this.employeeData.push(employee);
    localStorage.setItem('employeeData',JSON.stringify(store.employeeData));
  },
  //   updateEmployee:function(employee){
  //       this.data.
  //   }
  deleteEmployee: function(id) {
    for (var index = 0; index < this.employeeData.length; index++) {
      if (this.employeeData[index].employeeId == id) {
        this.employeeData.splice(index, 1);
        localStorage.setItem('employeeData',JSON.stringify(store.employeeData));
        break;
      }
    }
  }
};

function initialize(){
    if(localStorage.getItem('employeeData') != null){
        store.employeeData = JSON.parse(localStorage.getItem('employeeData'));
    }else{
        localStorage.setItem('employeeData',JSON.stringify(store.employeeData));
    }
}
//----------------------LOADING FUNCTION TO HTML---------------------
function loadData(gridData) {
  var table =
    "<table><tr><th>Employee ID</th><th>Employee Name</th><th>Job Title</th><th>Salary</th><th>Actions</th></tr>";
  gridData.forEach(element => {
    table +=
      "<tr><td>" +
      element.employeeId +
      "</td><td>" +
      element.employeeName +
      "</td><td>" +
      element.jobTitle +
      "</td><td>" +
      element.salary +
      "</td><td><a class='btn-danger' onclick='fnDelete(" +
      element.employeeId +
      ")'>Delete</a>&nbsp;&nbsp<a class='btn-edit' onclick= 'fnEdit()'>Edit</a>&nbsp;&nbsp;<a class='btn-view' onclick='fnDetails()'>View</a></tr>";
  });

  table += "</table>";
  document.getElementById("grid").innerHTML = table;
}

//--------------DISPLAYING TO HTML-----------------------------------------
window.onload = function() {
    initialize();
  document.getElementById("appName").innerHTML = store.appName;

  loadData(store.employeeData);
  toggleForm();
  document.getElementById("btnAddNew").addEventListener("click", function() {
    store.isAddorEdit = true;
    toggleForm();
  });

  document.getElementById("btnSave").addEventListener("click", function() {
    var employee = {
      employeeId: document.getElementById("txtEmployeeId").value,
      employeeName: document.getElementById("txtEmployeeName").value,
      jobTitle: document.getElementById("txtJobTitle").value,
      salary: document.getElementById("txtSalary").value
    };
    console.log(employee);
    store.addEmployee(employee);
    console.log(store.employeeData);
    store.isAddorEdit = false;
    toggleForm();
    loadData(store.employeeData);
  });
};

document.getElementById("btnCancel").addEventListener("click", function() {
  store.isAddorEdit = false;
  toggleForm();
  loadData(store.employeeData);
});
function toggleForm() {
  if (store.isAddorEdit) {
    document.getElementById("employeeFormContainer").style.display = "block";
    document.getElementById("grid").style.display = "none";
  } else {
    document.getElementById("grid").style.display = "block";
    document.getElementById("employeeFormContainer").style.display = "none";
  }
}

function fnDelete(id) {
  var status = confirm("Are you sure you want to delete Employee?");
  if (status) {
    store.deleteEmployee(id);
    loadData(store.employeeData);
  }
}
