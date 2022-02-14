function employee(fullName, department, level, imgURL){
    this.fullName=fullName;
    this.department=department;
    this.level=level;
    this.imgURL=imgURL;
    allEmployees.push(this);
}
var allEmployees=[];
employee.prototype.generateId = function () {
    let id = (Math.floor(Math.random() * 10000) + 10000).toString().substring(1);
    this.id = id;
}

employee.prototype.calSalary = function(min, max){ 
    let salary = Math.floor(Math.random() * (max - min)) + min;
    return (salary); 
}

employee.prototype.calNetSalary = function(salary){
    return (salary - (7.5 / 100 * salary));
}

employee.prototype.generateSalary = function(){
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
        
    this.salary = Math.ceil(this.calNetSalary(salary));
}

employee.prototype.render = function () {
    document.write(`<p align="center">${this.fullName[0]+" "+ this.fullName[1]} Salary is ${this.salary} </p>`);
}

let GhaziSamer = new employee(["Ghazi", "Samer"], "Administration", "Senior", 0);
let LanaAli = new employee(["Lana","Ali"], "Finance", "Senior", 0);
let TamaraAyoub = new employee(["Tamara","Ayoub"], "Marketing", "Senior", 0);
let SafiWalid = new employee(["Safi","Walid"], "Administration", "Mid-Senior", 0);
let OmarZaid = new employee(["Omar","Zaid"], "Development", "Senior", 0);
let RanaSaleh = new employee(["Rana","Saleh"], "Development", "Junior", 0);
let HadiAhmad = new employee(["Hadi","Ahmad"], "Finance", "Mid-Senior", 0);

for (let i=0; i<allEmployees.length; i++){
    allEmployees[i].generateSalary();
    allEmployees[i].generateId();
    allEmployees[i].imgURL=`./assets/${allEmployees[i].fullName[0]}.png`;
    allEmployees[i].render();
}