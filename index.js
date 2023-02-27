// Write your solution in this file!
const employee = {
    name: "Bob",
    streetAddress: "123 Fake Street"
};
//non-destructive, sends new Employee object with updated key/value
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee={...employee};
    newEmployee[key] = value;
    return newEmployee;
}
//returns original employee with new key/value
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
//returns original employee without specified key
function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
//returns original employee with specified key removed
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}