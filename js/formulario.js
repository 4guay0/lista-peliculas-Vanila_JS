var registroPelicula = [];
var modoEdicion = false;
var index;

function guardar() {
   //Se obtienen los dato del formulario por el Id de cada campo
   let nombre = document.getElementById("nombre").value;
   let genero = document.getElementById("genero").value;
   let descripcion = document.getElementById("descripcion").value;

   //En caso de que los campos esten llenos se construye el objeto JSON de película
   if (nombre.length > 0 && genero.length > 0 && descripcion.length > 0) {
      pelicula = {
         nombre: nombre,
         genero: genero,
         descripcion: descripcion,
      };
      //Verificar si se esta editando una pelicula
      //En caso de ser una edicion los datos se modifican 
      if (modoEdicion) {
         registroPelicula[index] = pelicula;
      }
      //En caso de ser un nuevo registro la pelicula se agrega a la lista
      else {
         registroPelicula.push(pelicula);
      }
      //Se limpian los campos del formulario
      document.getElementById("nombre").value = "";
      document.getElementById("descripcion").value = "";
      //Se muestra la lista de peliculas
      mostrar();
   }
   //En caso de tener uno o mas campos vacios se muestra un mensaje de alerta en la pantalla
   else {
      alert("Uno o más campos no continen información, favor de validar")
   }
}

function mostrar() {
   //Se imprime la cantidad de peliculas que estan guardadas en la lista
   document.getElementById("tituloRegistro").innerHTML = `<h2>Peliculas Lista #${registroPelicula.length}.</h2><br/>`
   //En caso de tener una o mas peliculas en la lista se construlle cada elemento para ser mostrado en el HTML
   let pelicula = " ";
   if (registroPelicula.length >= 0) {
      //Para cada pelicula se realiza la construccion del elemento HTML 
      for (let i = 0; i < registroPelicula.length; i++) {
         pelicula = pelicula + `
         <div class="pelicula">
            <h2>${registroPelicula[i].nombre}</h3>
            <p style="text-align: right;">Genero: ${registroPelicula[i].genero}<p>
            <h3>Descripción:</h3><p>${registroPelicula[i].descripcion}</p>
            <div class="botonesAccion">
               <button class="boton" onclick="editar(${i})"><i class="material-icons">edit</i></button>
               <button class="boton" onclick="borrar(${i})"><i class="material-icons">delete_forever</i></button>
            </div>
         </div>
         `;
      }
      //Se imprimen todos los elementos de pelicula en el element div con el id registro del HTML
      document.getElementById("registro").innerHTML = pelicula;
   }
}

function borrar(i) {
   console.log(registroPelicula);
   registroPelicula.splice(i, 1);
   mostrar();
}

function editar(i) {
   //Se muestran los datos que actualmente tiene la pelicula que sera editada
   document.getElementById("nombre").value = `${registroPelicula[i].nombre}`;
   document.getElementById("descripcion").value = `${registroPelicula[i].descripcion}`;
   index = i;
   //Se activa el modo edicion, asi al presionar el boton guardar los tados se editaran en la pelicula seleccionada
   modoEdicion = true;
}
