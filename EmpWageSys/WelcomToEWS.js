console.log("Welcome to Employee Wage Computation Program");
//random number for attendance (0 for absent, 1 for present)
const attendance = Math.floor(Math.random() * 2);

// Check attendance 
if (attendance === 1) {
  console.log("Employee is Present");
} else {
  console.log("Employee is Absent");
}

//Daily and part time wages of emp
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOURS = 8;
const PART_TIME_HOURS = 4;

// Generate random number for employment type

const employmentType = Math.floor(Math.random() * 2);

// Calculate daily wage using switch case
switch (attendance) {
  case 1:
    switch (employmentType) {
      case 0:
        console.log("Daily Wage:", FULL_DAY_HOURS * WAGE_PER_HOUR);
        break;
      case 1:
        console.log("Daily Wage:", PART_TIME_HOURS * WAGE_PER_HOUR);
        break;
      default:
        console.log("Invalid employment type");
    }
    break;
  case 0:
    console.log("Daily Wage: 0 (Employee is Absent)");
    break;
  default:
    console.log("Invalid attendance");
}