'use strict';
var allEmployees=[];
let form = document.getElementById("dataForm");
let empDiv = document.getElementById("container");

function Employee(fullName, department, level, imgURL){

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

function calSalary(min, max){ 
    let salary = Math.floor(Math.random() * (max - min)) + min;
    return (salary); 
}

function calNetSalary(salary){
    return (salary - (7.5 / 100 * salary));
}

function generateSalary(obj){
    let salary;

    if (obj.level == "Senior"){
        salary=calSalary(1500,2000);  
    }
    else if (obj.level == "Mid-Senior"){
        salary=calSalary(1000,1500)
    }
    else{
        salary=calSalary(500,1000)
    }
        
    return Math.ceil(calNetSalary(salary));
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
    info3.textContent =`Level: ${this.level} - Salary: ${this.salary}$`;

    newDiv.appendChild(info1);
    newDiv.appendChild(info2);
    newDiv.appendChild(info3);
    empDiv.appendChild(newDiv);
}

createEmp("Ghazi Samer", "Administration", "Senior", "./assets/Ghazi.jpg");
createEmp("Lana Ali", "Finance", "Senior", "./assets/Lana.jpg");
createEmp("Tamara Ayoub", "Marketing", "Senior", "./assets/Tamara.jpg");
createEmp("Safi Walid", "Administration", "Mid-Senior", "./assets/Safi.jpg");
createEmp("Omar Zaid", "Development", "Senior", "./assets/Omar.jpg");
createEmp("Rana Saleh", "Development", "Junior", "./assets/Rana.jpg");
createEmp("Hadi Ahmad", "Finance", "Mid-Senior", "./assets/Hadi.jpg");

function handelSubmit(event){
    event.preventDefault();
    let empName = event.target.fullName.value;
    let empDep = event.target.depName.value;
    let empLevel = event.target.level.value;
    let empImg = event.target.img.value; 
    getData();
    createEmp(empName, empDep, empLevel, empImg);
    renderAll();
    saveData();
}

form.addEventListener("submit", handelSubmit);

function createEmp(fullName, department, level, imgURL){
    
    let newEmp = new Employee(fullName, department, level, imgURL);
    newEmp.salary = generateSalary(newEmp);
    newEmp.empId = generateId();  
}

function renderAll(){
    document.getElementById("container").innerHTML="";
    allEmployees.forEach(emp => {
        emp.render();
    }); 
}

function saveData(){
    let formatedData = JSON.stringify(allEmployees);
    localStorage.setItem("employees", formatedData);
}

function getData(){
    let employees = localStorage.getItem("employees");
    let parseEmployees = JSON.parse(employees);
    if(parseEmployees != null){
        allEmployees = [];

        for(let i = 0; i < parseEmployees.length; i++){  
            createEmp(parseEmployees[i].fullName, parseEmployees[i].department, parseEmployees[i].level, parseEmployees[i].imgURL);
        };
    }
    renderAll();
}

renderAll();
getData();
saveData();