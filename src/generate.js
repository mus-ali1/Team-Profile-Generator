const internTemplate = (internData) => {
    const { name, id, email, role, school } = internData;

    const template = `
    <div class="card">
        <header>
        	<h2 class="name header">${name}</h2>
            <h3 class="role header">${role}</h3>
        </header>
        <p class="details">Employee ID: ${id}</p>
        <p class="details">Email: <a href="mailto:">${email}</a></p>
        <p class="details">School: ${school}</p>
    </div>`

    return template;
}