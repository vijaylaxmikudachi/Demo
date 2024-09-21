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
//Part time wages
const PART_TIME_HOURS = 4;

// random number for employment type (0 for full-time, 1 for part-time)
const employmentType = Math.floor(Math.random() * 2);

// Calculate daily wage based on attendance and employment type
if (attendance === 1) {
  if (employmentType === 0) {
    const dailyWage = FULL_DAY_HOURS * WAGE_PER_HOUR;
    console.log("Daily Wage:", dailyWage);
  } else {
    const dailyWage = PART_TIME_HOURS * WAGE_PER_HOUR;
    console.log("Daily Part time Wage:", dailyWage);
  }
} else {
  console.log("Daily Wage: 0 (Employee is Absent)");
}