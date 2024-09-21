console.log("Welcome to Employee Wage Computation Program");
//random number for attendance (0 for absent, 1 for present)
const attendance = Math.floor(Math.random() * 2);

// Check attendance 
if (attendance === 1) {
  console.log("Employee is Present");
} else {
  console.log("Employee is Absent");
}