class Employee {
  constructor() {
    this.wagePerHour = 20;
    this.fullDayHours = 8;
    this.partTimeHours = 4;
    this.maxWorkingHours = 100;
    this.maxWorkingDays = 20;
  }

  calculateDailyWage(attendance, employmentType) {
    switch (attendance) {
      case 1:
        switch (employmentType) {
          case 0:
            return this.fullDayHours * this.wagePerHour;
          case 1:
            return this.partTimeHours * this.wagePerHour;
          default:
            throw new Error("Invalid employment type");
        }
      case 0:
        return 0; // No wage for absent days
      default:
        throw new Error("Invalid attendance");
    }
  }

  calculateMonthlyWage() {
    let totalWorkingHours = 0;
    let totalWorkingDays = 0;
    let monthlyWage = 0;

    while (totalWorkingHours < this.maxWorkingHours && totalWorkingDays < this.maxWorkingDays) {
      const attendance = Math.floor(Math.random() * 2);
      const employmentType = Math.floor(Math.random() * 2);

      const dailyWage = this.calculateDailyWage(attendance, employmentType);
      if (dailyWage > 0) {
        totalWorkingHours += (attendance === 1 ? (employmentType === 0 ? this.fullDayHours : this.partTimeHours) : 0);
        totalWorkingDays += attendance;
        monthlyWage += dailyWage;
      }
    }

    return monthlyWage;
  }
}

// Create an employee object
const employee = new Employee();

// Calculate and print the monthly wage
const monthlyWage = employee.calculateMonthlyWage();
console.log("Monthly Wage:", monthlyWage);