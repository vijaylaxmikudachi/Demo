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
const WORKING_DAYS_PER_MONTH = 20;

// Initialize monthly wage
let monthlyWage = 0;

// Calculate monthly wage based on daily wages
for (let day = 1; day <= WORKING_DAYS_PER_MONTH; day++) {
  const attendance = Math.floor(Math.random() * 2);
  const employmentType = Math.floor(Math.random() * 2);

  switch (attendance) {
    case 1:
      switch (employmentType) {
        case 0:
          monthlyWage += FULL_DAY_HOURS * WAGE_PER_HOUR;
          break;
        case 1:
          monthlyWage += PART_TIME_HOURS * WAGE_PER_HOUR;
          break;
        default:
          console.log("Invalid employment type");
      }
      break;
    case 0:
      break; // No wage for absent days
    default:
      console.log("Invalid attendance");
  }
}

console.log("Monthly Wage:", monthlyWage);