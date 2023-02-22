function generateCard(employee) {
    const role = employee.getRole();
    const subClassProp = getSubclassProp(role);
    console.log(role);
    console.log("Name: ", employee.name);
    console.log("ID: ", employee.id);
    console.log("Email: ", employee.email);
    console.log(
        subClassProp + ": " + employee[subClassProp]
    );
}

function getSubclassProp(role) {
    if (role === 'Manager') {
        return 'officeNumber';
    }
    if (role === 'Engineer') {
        return 'github';
    }
    if (role === 'Intern') {
        return 'school';
    }
}

module.exports = generateCard;
