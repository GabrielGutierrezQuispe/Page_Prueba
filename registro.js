const url = "http://localhost:3000/api/contac/";
let resultados = '';
const formArticulo = document.querySelector("form");
const naames = document.getElementById("NAAMES");
const subjects = document.getElementById("SUBJECTS");
const email = document.getElementById("EMAIL");
const description = document.getElementById("DESCRIPTION");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (NAAMES.value == "" || SUBJECTS.value == "" || EMAIL.value == "" || DESCRIPTION.value == "") {
       		 alert("Asegúrese de que todos los campos estén completos");
       		 return false;
   		 } else {
       		 console.log("Todos los campos están completos");
       		 fetch(
           		 url,
           		 {
               		 method: 'POST',
               		 headers: {
                   		 'content-Type':'application/json'
               		 },
               		 body: JSON.stringify(
                   		 {
                       		 NAAMES: NAAMES.value,
                       		 SUBJECTS: SUBJECTS.value,
                       		 EMAIL: EMAIL.value,
                       		 DESCRIPTION: DESCRIPTION.value
                   		 }
               		 )
           		 }
       		 )
       		 .then(
           		 response => response.json()
       		 )
       		 .then(
           		 response => location.reload()
       		 );
   		 }
   	 } else if(opcion == 'editar'){
   		 console.log("Activado el ");
   	 }
    }
);