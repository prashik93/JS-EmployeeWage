const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck) {
        case IS_PART_TIME :
            return PART_TIME_HOURS;
        case IS_FULL_TIME :
            return FULL_TIME_HOURS;
        default : 
            return 0;
    }
}

function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();

while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
    dailyEmpWage = calcDailyWage(totalEmpHrs);
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, dailyEmpWage);
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("UC-6 - Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + empWage);

let totEmpWage = 0;
function sum(dailyWage) {
    totEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7A - Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + empWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("UC-7A - Emp Wage With Reduce : " + empDailyWageArr.reduce(totalWages, 0));

let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7-B - Daily Wage Map");
console.log(mapDayWithWageArr);

function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7-C - Daily Wage Filter When Full Time Wage Earned");
console.log(fullDayWageArr);

function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7-D - First time FullTime wage was earned on Day : " + mapDayWithWageArr.find(findFullTimeWage));

function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("UC7-E - Check All Element have Full Time Wage : " + fullDayWageArr.every(isAllFullTimeWage));

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("UC7-F - Check If Any Part Time Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

function totalDayWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7-G - Number of Days Emp Worked : " + empDailyWageArr.reduce(totalDayWorked, 0));

let text = " ";
empDailyWageMap.forEach (function(value, key) {
  text += key + ' = ' + value + ", ";
})
console.log("UC8 - Store the Day And Daily Wage Along With The Total Wage : " + text);


// UC9 - Arrow Functions
const findTotal = (totalVal, dailyValue) => {
    return totalVal + dailyValue;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("UC9-a - Emp Wage With Arrow : " + " Total Hours : " + totalHours + " Total Wages : " + totalSalary); 

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) => {
    if(value == 8) fullWorkingDays.push(key);
    else if(value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days : " + fullWorkingDays);
console.log("Part Working Days : " + partWorkingDays);
console.log("Non Working Days : " + nonWorkingDays);

// UC10 - Object Creation

let totalEmpHours = 0;
let totalWorkingDay = 0;
let empDailyHrsAndWageArr = new Array();
while((totalEmpHours <= MAX_HRS_IN_MONTH) && (totalWorkingDay < NUM_OF_WORKING_DAYS)) {
    totalWorkingDay++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHours += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum : totalWorkingDay,
        dailyHours : empHrs,
        dailyWage : calcDailyWage(empHrs),
        toString() {
            return '\nDay' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned ' + this.dailyWage
        },
    });
}
console.log("UC10 - Showing Daily Hours Worked And Wage Earned : " + empDailyHrsAndWageArr);

// UC11-A to UC11-D Using Object Functions along with Arrow Functions

let totalWage = empDailyHrsAndWageArr
                .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
                .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let totalHrs = empDailyHrsAndWageArr
               .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
               .reduce((totalHrs, dailyHrsAndWage) => totalHrs += dailyHrsAndWage.dailyHours, 0);
console.log("UC11A - Total Hours : " + totalHrs + " Total Wages : " + totalWage);

process.stdout.write("UC11-B - Logging Full Work Days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8)
                     .forEach(dailyHrsAndWage => process.stdout.write(dailyHrsAndWage.toString()));
console.log();

let partWorkingDayStrArr = empDailyHrsAndWageArr
                           .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4)
                           .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("UC11C - PartWorkingDayStrings : " + partWorkingDayStrArr);

let nonWorkingDayNums = empDailyHrsAndWageArr
                        .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
                        .map(dailyHrsAndWage => dailyHrsAndWage.dayNum);
console.log("UC11D - NonWorkingDayNums : " + nonWorkingDayNums);