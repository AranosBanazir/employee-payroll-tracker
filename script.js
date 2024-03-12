// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
let employeesArray = []
// Collect employee data

const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let firstName = prompt("Employees First Name:")
  let lastName = prompt("Employees Last Name:")
  //made this parseInt to convert it to an integer
  let salary = parseInt(prompt("Employees Annual Salary:"))
  
   
    if (isNaN(salary)|| salary===undefined){
      salary = 0
    }
 
  const NameCheck = function(name){

    if (name === "first"){
      if (firstName === "" || firstName === undefined || firstName === null ){
        firstName = prompt("First name cannot be empty! Try again!")
        NameCheck("first")
      }else if (firstName.match(/\d+/g)){
        firstName = prompt("First name cannot contain numbers! Try again!")
        NameCheck("first")
      }

    }else if (name === "last"){
      if (lastName === "" || lastName === undefined || lastName === null){
        lastName = prompt("Last name cannot be empty! Try again!")
        NameCheck("last")
      }else if (lastName.match(/\d+/g)){
        lastName = prompt("Last name cannot contain numbers! Try again!")
        NameCheck("last")
      }
      }
    }
  

  // Making sure all selections are validated properly
  NameCheck("first") //Makes sure the first name option is not empty, and does not contain inappropriate characters
  NameCheck("last") //Makes sure the last name option is not empty, and does not contain inappropriate characters
  
  //Declaring object format
  let employeeObj = {
    firstName,
    lastName,
    salary,
  }

  employeeObj.firstName = firstName
  employeeObj.lastName = lastName
  employeeObj.salary = salary

  //pushing the object into the array
  employeesArray.push(employeeObj)
  
  

  //checking to confirm they want to continue and returning the array
  while (confirm("Do you wish to continue?")) {
    collectEmployees()
    return employeesArray
  }
  return employeesArray

}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  let total = 0
  let average;
  console.log(employeesArray)

  if (employeesArray.length === 1) {
    return employeesArray[0].salary

  }else{
    for (let i=0;i<employeesArray.length;i++){
      total = Math.floor(total + parseInt(employeesArray[i].salary))
    }
    
    average = Math.round(total / employeesArray.length)
  return `The average salary between our ${employeesArray.length} employee(s) is: $${average.toLocaleString()}`
  }
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let rnd = Math.floor(Math.random() * employeesArray.length)
  return `Congratulations to ${employeesArray[rnd].firstName} ${employeesArray[rnd].lastName} who is our lucky drawing winner!`
}

 
// console.log(`The average salary between our ${employeesArray.length} employee(s) is: $${displayAverageSalary(employees).toLocaleString()}`)
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
    // This doesn't seem to be working
    //TODO Ask about fixing this
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-EN",{
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
