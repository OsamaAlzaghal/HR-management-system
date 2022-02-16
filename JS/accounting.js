function getData(){
    let employees = localStorage.getItem("employees");
    let parseEmployees = JSON.parse(employees);
    return parseEmployees;
}
let tableInfo = {};
function dataTable(){
    
    let empData = getData();

    console.log(empData);

    tableInfo.administrationCounter = 0;
    tableInfo.financeCounter = 0;
    tableInfo.marketingCounter = 0;
    tableInfo.developmentCounter = 0;

    tableInfo.administrationSalary = 0;
    tableInfo.financeSalary = 0;
    tableInfo.marketingSalary = 0;
    tableInfo.developmentSalary = 0;

    for (const i of empData) {
        if(i.department == "Administration"){
            tableInfo.administrationCounter += 1;
            tableInfo.administrationSalary += i.salary;
        }
        else if(i.department == "Finance"){
            tableInfo.financeCounter += 1;
            tableInfo.financeSalary += i.salary;
        }
        else if(i.department == "Marketing"){
            tableInfo.marketingCounter += 1;
            tableInfo.marketingSalary += i.salary;
        }
        else{
            tableInfo.developmentCounter +=1;
            tableInfo.developmentSalary += i.salary;
        }
    }

tableInfo.administrationAVG = tableInfo.administrationSalary / tableInfo.administrationCounter;
tableInfo.financeAVG = tableInfo.financeSalary / tableInfo.financeCounter;
tableInfo.marketingAVG = tableInfo.marketingSalary / tableInfo.marketingCounter;
tableInfo.developmentAVG = tableInfo.developmentSalary / tableInfo.developmentCounter;

tableInfo.totalEmp =  tableInfo.administrationCounter + tableInfo.financeCounter + tableInfo.marketingCounter + tableInfo.developmentCounter;
tableInfo.totalSalary = tableInfo.administrationSalary + tableInfo.financeSalary + tableInfo.marketingSalary + tableInfo.developmentSalary;
tableInfo.totalSalaryAVG = tableInfo.totalSalary/tableInfo.totalEmp;

}

function renderHead(){
    let table = document.getElementById("table");
    table.setAttribute("width","50%");
    let tr = document.createElement("tr");
    table.appendChild(tr);
    table.setAttribute("border","1px")

    let columnName = document.createElement('th');
    columnName.textContent = "Department";
    tr.appendChild(columnName);

    let columnNum = document.createElement('th');
    columnNum.textContent = "#of Employees";
    tr.appendChild(columnNum);

    let columnSalary = document.createElement('th');
    columnSalary.textContent = "Total Salary";
    tr.appendChild(columnSalary);

    let columnAvg = document.createElement('th');
    columnAvg.textContent = "Average Salary";
    tr.appendChild(columnAvg);
}


function renderRow(department,empNumber,salary,avg){
    let table = document.getElementById("table");
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = department;
    tr.appendChild(columnName);

    let columnNum = document.createElement('td');
    columnNum.textContent = empNumber ;
    tr.appendChild(columnNum);

    let columnSalary = document.createElement('td');
    columnSalary.textContent = (salary);
    tr.appendChild(columnSalary);

    let columnAvg = document.createElement('td');
    columnAvg.textContent = (avg);
    tr.appendChild(columnAvg);
}

function renderBody(){
    
    renderRow("Administration", tableInfo.administrationCounter, tableInfo.administrationSalary, tableInfo.administrationAVG);
    renderRow("Marketing", tableInfo.marketingCounter, tableInfo.marketingSalary, tableInfo.marketingAVG);
    renderRow("Development", tableInfo.developmentCounter, tableInfo.developmentSalary, tableInfo.developmentAVG);
    renderRow("Finance", tableInfo.financeCounter, tableInfo.financeSalary, tableInfo.financeAVG);
}

function renderBottom(){
    
    let tr = document.createElement("tr");
    table.appendChild(tr);

    let columnName = document.createElement('th');
    columnName.textContent = "Total";
    tr.appendChild(columnName);

    let empNum = document.createElement('th');
    empNum.textContent = tableInfo.totalEmp;
    tr.appendChild(empNum);

    let empSalary = document.createElement('th');
    empSalary.textContent = (tableInfo.totalSalary);
    tr.appendChild(empSalary);

    let empAvg = document.createElement('th');
    empAvg.textContent = (tableInfo.totalSalaryAVG);
    tr.appendChild(empAvg);
}

dataTable();
renderHead();
renderBody();
renderBottom();