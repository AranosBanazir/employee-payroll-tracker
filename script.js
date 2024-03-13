// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
const employeesArray = []
// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let firstName = prompt("What is your first name?")
  let lastName = prompt("What is your last name?")
  let salary = prompt("How much do you make a year?")
  let salaryCheck = function(){
    if (isNaN(salary) || salary === "" || salary === undefined) {
      salary = prompt("Salary must be a number, please enter correct salary amount or 0.")
      salaryCheck()
    }
  }
  let NameCheck = function(name){

    if (name === "first"){
      if (firstName === "" || firstName === undefined || firstName === null){
        firstName = prompt("First name may not be empty! Try again!")
        NameCheck("first")
      }

    }else if (name === "last"){
      if (lastName === "" || lastName === undefined || lastName === null){
        lastName = prompt("Last name may not be empty! Try again!")
        NameCheck("last")

      }
    }
  }

  // Making sure all selections are validated properly
  salaryCheck()
  NameCheck("first")
  NameCheck("last")
  
  let employeeObj = {
    firstName,
    lastName,
    salary,
  }

  employeeObj.firstName = firstName
  employeeObj.lastName = lastName
  employeeObj.salary = salary

  employeesArray.push(employeeObj)

  // employeesArray.push(firstName, lastName, salary)

  employeesArray.forEach(element => {
    console.log(employeesArray[0])
    
  });


  if (confirm("Do you wish to continue?")){
    collectEmployees()
  }else{
    alert("Done adding employees!")
  }
  
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
