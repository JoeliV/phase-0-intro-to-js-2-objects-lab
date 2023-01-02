
const employee = {
    key: 'name',
    value: 'streetAddress',
}


function updateEmployeeWithKeyAndValue(employee,key,value){
    const updateEmployee = { ...employee};
    updateEmployee[key] = value;
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    const updateEmployee = { ...employee};
    updateEmployee[key] = value;
    return updateEmployee;

    const desUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue;

}

function deleteFromEmployeeByKey(employee, key, value){
    const deleteKey = delete key;
    return deleteKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key,value){
    key: 'name'
    value: 'streetAddress'
    
    const deleteKey = delete key;
    
    return deleteKey;
}
