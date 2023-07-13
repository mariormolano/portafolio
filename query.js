//cargar primero el json-server -w backend/skills.json

//Enlace al componente HTML
const skillsContainer = document.getElementById("skillsContainer");

//Función flecha sincrónica 

const datos = async (type) => {
  let data;
  //solicitar datos de la api
  await fetch(`https://portafolio-blond-three.vercel.app/${type}`)
    // solicitar el JSON
    .then((peticion) => peticion.json())
    // Guardar la respuesta en una variable
    .then((respueta) => {
      data = respueta;
    });
  // retornar la respuesta
  return data;
};

//se ejecuta la función y espera a que se retorne los datos
const skills = await datos("skills");

//iteración con los elementos recibidos
skills.forEach((element) => {
  console.log(element);

  skillsContainer.innerHTML =
    skillsContainer.innerHTML +
    `<div class="card"><img class="card--icon" src="${element.icon}" /> <p class="card--titulo">${element.skill}</p> </div> `;
});


