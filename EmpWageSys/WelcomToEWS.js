console.log("Welcome to Employee Wage Computation Program");
//random number for attendance (0 for absent, 1 for present)
const attendance = Math.floor(Math.random() * 2);

// Check attendance 
if (attendance === 1) {
  console.log("Employee is Present");
} else {
  console.log("Employee is Absent");
}

//Daily wages of emp
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;

// Calculate daily wage based on attendance
if (attendance === 1) {
  const dailyWage = FULL_DAY_HOURS * WAGE_PER_HOUR;
  console.log("Daily Wage:", dailyWage);
} else {
  console.log("Daily Wage: 0 (Employee is Absent)");
}