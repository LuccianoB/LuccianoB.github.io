// projects //

const projects = [
    { name:"Employee Directory", skills: ["html", "js"] , link:"https://luccianob.github.io/Techdegree-Project-8", code:"https://github.com/LuccianoB/Techdegree-Project-8"},
    { name:"Photo Gallery", skills: ["html", "js"], link:"https://luccianob.github.io/techdegree-project-5", code:"https://github.com/LuccianoB/techdegree-Project-5"},
    { name:"Dashboard", skills: ["html", "js", "css"] , link:"https://luccianob.github.io/Techdegree-project-7", code:"https://github.com/LuccianoB/Techdegree-project-7"},
    { name:"Wheel of Success", skills: ["html", "js"] , link:"https://luccianob.github.io/Techdegree-Project-6", code:"https://github.com/LuccianoB/Techdegree-Project-6"},
    { name:"Circles Demo", skills: ["html", "css", "scss"], link:"https://luccianob.github.io/Techdegree-project-4", code:"https://github.com/LuccianoB/Techdegree-project-4"},
    { name:"Form Example", skills: ["html", "css"], link:"https://luccianob.github.io/Techdegree-Project-3", code:"https://github.com/LuccianoB/Techdegree-Project-3"}    
]  


// programs //
const Container = document.querySelector(".prog-container");
let projectHTML = '';

projects.forEach((project, index) => {
    let name = project.name;
    let link = project.link;
    let code = project.code;
    let skills = project.skills;

    console.log(skills);
    
    projectHTML += `
    <div class="card" data-index="${index}" id="card${index}">
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

    Container.innerHTML = projectHTML;

    skills.forEach((skill) => {
        document.querySelector(`#card${index}`).classList.add(`${skill}`);
    });
});


