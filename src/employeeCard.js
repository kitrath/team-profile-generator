function generateCard(employee) {
    const role = employee.getRole();
    const e = employee;
    const card = `
        <div class="col-md-4">
            <div class="card">
                <div class="card-header bg-danger text-white font-weight-bold">${e.getRole()}</div>
                <div class="card-body">
                    <h5 class="card-title ">${e.getName()}</h5>
                    <p class="card-text">Employee ID: ${e.getId()}</p>
                    ${renderEmail(e.getEmail())}
                    ${renderRoleSpecific(e)}
                </div>
            </div>
        </div> 
    `;
    return card;
}

function renderGitHubLink(username) {
    return `<p class="card-text">GitHub: <a href="https://github.com/${username}">${username}</a></p>`;
}

function renderEmail(email) {
    return `<a class="card-link" href="mailto:${email}">${email}</a>`;
}

function renderOfficeNumber(officeNumber) {
    return `<p class="card-text text-bold">Office Number: ${officeNumber}</p>`;
}

function renderSchool(school) {
    return `<p class="card-text font-italic">${school}</p>`;
}

function renderRoleSpecific(employee) {
    const role = employee.getRole();
    if (role === "Manager")
        return renderOfficeNumber(employee.officeNumber);
    if (role === "Engineer")
        return renderGitHubLink(employee.getGithub());
    if (role === "Intern")
        return renderSchool(employee.getSchool());
}

module.exports = generateCard;
