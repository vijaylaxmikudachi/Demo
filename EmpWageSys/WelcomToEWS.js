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
const MAX_WORKING_HOURS = 100;
const MAX_WORKING_DAYS = 20;

// Initialize variables
let totalWorkingHours = 0;
let totalWorkingDays = 0;
let monthlyWage = 0;

// Calculate monthly wage until conditions are met
while (totalWorkingHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
  const attendance = Math.floor(Math.random() * 2);
  const employmentType = Math.floor(Math.random() * 2);

  switch (attendance) {
    case 1:
      totalWorkingDays++;
      switch (employmentType) {
        case 0:
          totalWorkingHours += FULL_DAY_HOURS;
          monthlyWage += FULL_DAY_HOURS * WAGE_PER_HOUR;
          break;
        case 1:
          totalWorkingHours += PART_TIME_HOURS;
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