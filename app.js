// projects //

const projects = [
    { name:"Employee Directory", skills: ["html", "js"] , link:"https://luccianob.github.io/Techdegree-Project-8", code:"https://github.com/LuccianoB/Techdegree-Project-8"},
    { name:"Photo Gallery", skills: ["html", "js"], link:"https://luccianob.github.io/techdegree-project-5", code:"https://github.com/LuccianoB/techdegree-Project-5"},
    { name:"Dashboard", skills: ["html", "js", "css"] , link:"https://luccianob.github.io/Techdegree-project-7", code:"https://github.com/LuccianoB/Techdegree-project-7"},
    { name:"Wheel of Success", skills: ["html", "js"] , link:"https://luccianob.github.io/Techdegree-Project-6", code:"https://github.com/LuccianoB/Techdegree-Project-6"},
    { name:"Circles Demo", skills: ["html", "css", "scss"], link:"https://luccianob.github.io/Techdegree-project-4", code:"https://github.com/LuccianoB/Techdegree-project-4"},
    { name:"Form Example", skills: ["html", "css"], link:"https://luccianob.github.io/Techdegree-Project-3", code:"https://github.com/LuccianoB/Techdegree-Project-3"}    
];  


// programs //
const Container = document.querySelector(".prog-container");
let projectHTML = '';

projects.forEach((project, index) => {
    let name = project.name;
    let link = project.link;
    let code = project.code;
    
    projectHTML += `
    <div class="card " data-index="${index}" id="card${index}">
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
});

projects.forEach((project, index) => {
    let skills = project.skills;

    skills.forEach((skill) => {
        document.querySelector(`#card${index}`).classList.add(`${skill}`);
    });
});


//  Filter functions    //

filterSelection("all");
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("card");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
      w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
}

function w3RemoveClass(element, name) {
var i, arr1, arr2;
arr1 = element.className.split(" ");
arr2 = name.split(" ");
for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
    arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
}
element.className = arr1.join(" ");
}

