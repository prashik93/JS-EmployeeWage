// UC1-Check Employee Is Present Or Not
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if(empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
    return;
}
console.log("Employee is Present")