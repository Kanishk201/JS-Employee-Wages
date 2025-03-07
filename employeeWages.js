const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}

//UC2
// UC-2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheckSwitch = Math.floor(Math.random() * 10) % 3;

switch (empCheckSwitch) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);

// UC-3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empCheckUC3 = Math.floor(Math.random() * 10) % 3;
let empHrsUC3 = getWorkingHours(empCheckUC3);
let empWageUC3 = empHrsUC3 * WAGE_PER_HOUR;
console.log("Emp Wage per working hours: " + empWageUC3);

// UC-4
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;

for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

console.log(`Total Monthly Hours: ${totalEmpHrs}, Total Monthly Wage: ${totalEmpHrs * WAGE_PER_HOUR}`);

// UC-5
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS_LIMIT = 10;
let totalEmpHrsLimit = 0;
let totalWorkingDaysLimit = 0;


while (totalEmpHrsLimit < MAX_HRS_IN_MONTH && totalWorkingDaysLimit < NUM_OF_WORKING_DAYS_LIMIT) {
    totalWorkingDaysLimit++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrsLimit += getWorkingHours(empCheck);
    let empWageLimit = totalEmpHrsLimit * WAGE_PER_HOUR;

    console.log(`Total Days: ${totalWorkingDaysLimit}, Total Hrs: ${totalEmpHrsLimit}, Emp Wage: ${empWageLimit}`);
}

// UC-6

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

const MAX_HRS_INMONTH = 160;
const NUM_OF_WORKINGDAYS = 20;
let totalEmpHr = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array(); 

while (totalEmpHr <= MAX_HRS_INMONTH && totalWorkingDays < NUM_OF_WORKINGDAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHr += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs)); 
}

empWage = calcDailyWage(totalEmpHr);

console.log(`Total Days: ${totalWorkingDays}, Total Hrs: ${totalEmpHr}, Emp Wage: ${empWage}`);
console.log("Daily Wages Array:", empDailyWageArr);

// UC-7: Filter data using Array Helper Functions

// UC7A: Calculate Total Employee Wage using forEach and reduce
let totalEmpWage = 0;
empDailyWageArr.forEach(wage => totalEmpWage += wage);
console.log("UC7A - Total Wage using forEach:", totalEmpWage);
console.log("UC7A - Total Wage using reduce:", empDailyWageArr.reduce((total, wage) => total + wage, 0));

// UC7B: Map Day with Daily Wage
let dailyCounter = 0;
let mapDayWithWageArr = empDailyWageArr.map(wage => `Day ${++dailyCounter}: ${wage}`);
console.log("UC7B - Day with Wages:", mapDayWithWageArr);

// UC7C: Filter Days with Full-Time Wage
let fullTimeWageArr = empDailyWageArr.filter(wage => wage === 160);
console.log("UC7C - Full-Time Wage Days:", fullTimeWageArr);

// UC7D: Find First Day with Full-Time Wage
console.log("UC7D - First Full-Time Wage Earned on:", empDailyWageArr.find(wage => wage === 160));

// UC7E: Check if All Entries are Full-Time Wage
console.log("UC7E - Are all full-time wages?:", fullTimeWageArr.every(wage => wage === 160));

// UC7F: Check if Any Part-Time Wage Exists
console.log("UC7F - Is there any Part-Time Wage?:", empDailyWageArr.some(wage => wage === 80));

// UC7G: Count Number of Days Worked
let totalDaysWorked = empDailyWageArr.reduce((days, wage) => (wage > 0 ? days + 1 : days), 0);
console.log("UC7G - Number of Days Worked:", totalDaysWorked);