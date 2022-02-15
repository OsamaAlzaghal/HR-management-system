'use strict';
var allEmployees=[];
let form = document.getElementById("dataForm");
let empDiv = document.getElementById("container");

function Employee(empId, fullName, department, level, imgURL){

    this.empId=empId;
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imgURL=imgURL;
    allEmployees.push(this);
}
function generateId() {
    let randomId = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    return randomId;
}

Employee.prototype.calSalary = function(min, max){ 
    let salary = Math.floor(Math.random() * (max - min)) + min;
    return (salary); 
}

Employee.prototype.calNetSalary = function(salary){
    return (salary - (7.5 / 100 * salary));
}

Employee.prototype.generateSalary = function(){
    let salary;

    if (this.level == "Senior"){
        salary=this.calSalary(1500,2000);  
    }
    else if (this.level == "Mid-Senior"){
        salary=this.calSalary(1000,1500)
    }
    else{
        salary=this.calSalary(500,1000)
    }
        
    return Math.ceil(this.calNetSalary(salary));
}

Employee.prototype.render = function () {

    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#219F94";
    newDiv.style.width = "250px";
    newDiv.style.padding = "20px";
    newDiv.style.margin = "20px";
    newDiv.style.fontSize = "17px";
    newDiv.style.color = "white";
    newDiv.style.height = "325px";
    newDiv.style.borderTopLeftRadius = "12px";

    var img = document.createElement("img");
    img.setAttribute("src",this.imgURL);
    img.style.width = "210px";
    img.style.height = "auto";
    img.style.marginBottom = "10px";
    img.style.borderTopLeftRadius = "12px";
    newDiv.appendChild(img);

    let info1 = document.createElement('p');
    let info2 = document.createElement('p');
    let info3 = document.createElement('p');
    info1.textContent =`Name: ${this.fullName} - ID: ${this.empId}`;   
    info2.textContent =`Department: ${this.department}`;
    info3.textContent =`Level: ${this.level} - Salary: ${this.generateSalary()}$`;

    newDiv.appendChild(info1);
    newDiv.appendChild(info2);
    newDiv.appendChild(info3);
    empDiv.appendChild(newDiv);
}

let GhaziSamer = new Employee(1000, "Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
let LanaAli = new Employee(1001, "Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");
let TamaraAyoub = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg");
let SafiWalid = new Employee(1003, "Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
let OmarZaid = new Employee(1004, "Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
let RanaSaleh = new Employee(1005, "Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");
let HadiAhmad = new Employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");


function handelSubmit(event){
    event.preventDefault();
    let empName = event.target.fullName.value;
    let empDep = event.target.depName.value;
    let empLevel = event.target.level.value;
    let empImg = event.target.img.value;
    let newEmp = createEmp(empName, empDep, empLevel, empImg);
    newEmp.render();   
}

form.addEventListener("submit", handelSubmit);

function createEmp(fullName, department, level, imgURL){
    let id = generateId();
    let newEmp = new Employee(id,fullName, department, level, imgURL);
    newEmp.generateSalary();
    
    return newEmp;
}

function renderAll(){
    allEmployees.forEach(emp => {
        emp.render();
    }); 
}
renderAll();