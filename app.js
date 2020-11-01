// projects //

const projects = [
    { name:"Employee Directory", link:"https://luccianob.github.io/Techdegree-Project-8/", code:"https://github.com/LuccianoB/Techdegree-Project-8"},
    { name:"Photo Gallery", link:"https://luccianob.github.io/techdegree-project-5", code:"https://github.com/LuccianoB/techdegree-Project-5"},
    { name:"Dashboard", link:"https://luccianob.github.io/Techdegree-project-7", code:"https://github.com/LuccianoB/Techdegree-project-7"},
    { name:"Wheel of Success", link:"https://luccianob.github.io/Techdegree-Project-6", code:"https://github.com/LuccianoB/Techdegree-Project-6"}
    ]


// programs //
const Container = document.querySelector(".prog-container");
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
    `;
});

Container.innerHTML = projectHTML;

