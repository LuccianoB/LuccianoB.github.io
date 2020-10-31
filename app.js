let projects = [];
const Container = document.querySelector(".prog-container");


function displayEmployees(employeeData) {
    projects = projectData;

    let projectHTML = '';

    projects.forEach((project, index) => {
        let name = project.name;
        let link = project.link;
        let code = project.code;

        projectHTML += `
        <div class="card" data-index="${index}">
        <img src="img/${name}.png" class="card-img-top" alt="${name}">
        <div class="card-body text-center">
          <h5 class="card-text">${name}</h5>
          <div>
            <a class="btn btn-primary" href="${link}" role="button">Live</a>
            <a class="btn btn-primary" href="${code}" role="button">Code</a>
          </div>
        </div>
      </div>
        `
    });

    Container.innerHTML = employeeHTML;
}
