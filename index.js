const employee = {
    name: "Nancy",
    streetAddress: "55 East Delaware Street",
  };

  function updateEmployeeWithKeyAndValue(obj, key, value) {
      const newEmployee = {...employee};
      newEmployee[key] = value;
      return newEmployee
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
      obj[key] = value;
      return obj;
  }

  function deleteFromEmployeeByKey(obj, key) {
      const newObj = {...obj}
      delete newObj[key];
      return newObj;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
      delete employee[key];
      return employee;
  }