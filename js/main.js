// MiMascota.com - Directorio para Encontrar mascotas para Adoptar

// Declaramos un Listado de Objetos que representarán a todas las mascotas en adopcion de los dos tipos (perritos y gatitos)
const perritos = [
    { nombre: "Max", raza: "French", edad: 8, tamanio: "Mediano", lugar: "CDMX" },
    { nombre: "Luna", raza: "Labrador", edad: 3, tamanio: "Grande", lugar: "Guadalajara" },
    { nombre: "Bella", raza: "Beagle", edad: 1, tamanio: "Pequeño", lugar: "Monterrey" },
    { nombre: "Rocky", raza: "Pitbull", edad: 5, tamanio: "Grande", lugar: "CDMX" },
    { nombre: "Coco", raza: "Chihuahua", edad: 2, tamanio: "Pequeño", lugar: "Puebla" },
    { nombre: "Simón", raza: "Golden Retriever", edad: 4, tamanio: "Grande", lugar: "CDMX" },
    { nombre: "Lucas", raza: "Bulldog", edad: 5, tamanio: "Mediano", lugar: "Guadalajara" },
    { nombre: "Lola", raza: "Poodle", edad: 3, tamanio: "Pequeño", lugar: "Querétaro" },
    { nombre: "Bruno", raza: "Boxer", edad: 6, tamanio: "Grande", lugar: "Monterrey" },
    { nombre: "Daisy", raza: "Dálmata", edad: 4, tamanio: "Mediano", lugar: "CDMX" },
  ];

  const gatitos = [
    { nombre: "Mimi", raza: "Siamese", edad: 1, tamanio: "Pequeño", lugar: "CDMX" },
    { nombre: "Pelusa", raza: "Persa", edad: 3, tamanio: "Mediano", lugar: "Guadalajara" },
    { nombre: "Sombra", raza: "Angora", edad: 2, tamanio: "Mediano", lugar: "Puebla" },
    { nombre: "Oreo", raza: "Sphynx", edad: 4, tamanio: "Pequeño", lugar: "Querétaro" },
    { nombre: "Olivia", raza: "Bengalí", edad: 5, tamanio: "Mediano", lugar: "CDMX" },
    { nombre: "Leo", raza: "Maine Coon", edad: 3, tamanio: "Grande", lugar: "Monterrey" },
    { nombre: "Nina", raza: "Scottish Fold", edad: 2, tamanio: "Pequeño", lugar: "CDMX" },
    { nombre: "Simba", raza: "Ragdoll", edad: 4, tamanio: "Grande", lugar: "Oaxaca" },
    { nombre: "Lila", raza: "British Shorthair", edad: 1, tamanio: "Mediano", lugar: "Guadalajara" },
    { nombre: "Chabelo", raza: "Burmese", edad: 6, tamanio: "Mediano", lugar: "CDMX" },
  ];

  // Funcion de Buscar Mascota que se activa por un botón

  function BuscarMascota() {
    const tipoMascota = prompt("Escribe la opción del tipo de mascota que quieres: \n" +
                                "1-Perrito \n" +
                                "2-Gatito \n ");
    if (tipoMascota == '1') {
        const tipoBusqueda = prompt("Escribe el número del tipo de búsqueda por el cual quieres encontrar a tu perrito: \n" +
                                "1-Por nombre \n" +
                                "2-Por raza \n" +
                                "3-Por edad \n" +
                                "4-Por tamaño \n" +
                                "5-Por lugar \n ");
        switch(tipoBusqueda){
            case "1":
                const nombreIngresado = prompt("Ingresa el nombre de la mascota que buscas:");
                for( perrito of perritos) {
                    if(nombreIngresado === perrito.nombre){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + perrito.nombre + "\n" +
                        "Raza: " + perrito.raza + "\n" +
                        "Edad: " + perrito.edad + "\n" +
                        "Tamaño: " + perrito.tamanio + "\n" +
                        "Lugar: " + perrito.lugar);
                    }   
                }
                break;
                
            case "2":
                const razaIngresada = prompt("Ingresa la raza de la mascota que buscas:");
                for( perrito of perritos) {
                    if(razaIngresada === perrito.raza){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + perrito.nombre + "\n" +
                        "Raza: " + perrito.raza + "\n" +
                        "Edad: " + perrito.edad + "\n" +
                        "Tamaño: " + perrito.tamanio + "\n" +
                        "Lugar: " + perrito.lugar);
                    }   
                }
                break;

            case "3":
                const edadIngresada = parseInt(prompt("Ingresa la edad de la mascota que buscas:"));
                for( perrito of perritos) {
                    if(edadIngresada === perrito.edad){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + perrito.nombre + "\n" +
                        "Raza: " + perrito.raza + "\n" +
                        "Edad: " + perrito.edad + "\n" +
                        "Tamaño: " + perrito.tamanio + "\n" +
                        "Lugar: " + perrito.lugar);
                    }   
                }
                break;
                
            case "4":
                const tamanioIngresado = prompt("Ingresa el tamaño de la mascota que buscas:");
                for( perrito of perritos) {
                    if(tamanioIngresado === perrito.tamanio){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + perrito.nombre + "\n" +
                        "Raza: " + perrito.raza + "\n" +
                        "Edad: " + perrito.edad + "\n" +
                        "Tamaño: " + perrito.tamanio + "\n" +
                        "Lugar: " + perrito.lugar);
                    }   
                }
                break;

            case "5":
                const lugarIngresado = prompt("Ingresa la ciudad (ubicación) de la mascota que buscas:");
                for( perrito of perritos) {
                    if(lugarIngresado === perrito.lugar){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + perrito.nombre + "\n" +
                        "Raza: " + perrito.raza + "\n" +
                        "Edad: " + perrito.edad + "\n" +
                        "Tamaño: " + perrito.tamanio + "\n" +
                        "Lugar: " + perrito.lugar);
                    }   
                }
                break;
            
            default: alert("Escoge una opción de búsqueda válida, intentalo nuevamente");
    
        }
    }    else if (tipoMascota == '2') {
        const tipoBusqueda = prompt("Escribe el número del tipo de búsqueda por el cual quieres encontrar a tu gatito: \n" +
                                "1-Por nombre \n" +
                                "2-Por raza \n" +
                                "3-Por edad \n" +
                                "4-Por tamaño \n" +
                                "5-Por lugar \n ");
        switch(tipoBusqueda){
            case "1":
                const nombreIngresado = prompt("Ingresa el nombre de la mascota que buscas:");
                for( gatito of gatitos) {
                    if(nombreIngresado === gatito.nombre){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + gatito.nombre + "\n" +
                        "Raza: " + gatito.raza + "\n" +
                        "Edad: " + gatito.edad + "\n" +
                        "Tamaño: " + gatito.tamanio + "\n" +
                        "Lugar: " + gatito.lugar);
                    }   
                }
                break;

            case "2":
                const razaIngresada = prompt("Ingresa la raza de la mascota que buscas:");
                for( gatito of gatitos) {
                    if(razaIngresada === gatito.raza){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + gatito.nombre + "\n" +
                        "Raza: " + gatito.raza + "\n" +
                        "Edad: " + gatito.edad + "\n" +
                        "Tamaño: " + gatito.tamanio + "\n" +
                        "Lugar: " + gatito.lugar);
                    }   
                }
                break;

            case "3":
                const edadIngresada = parseInt(prompt("Ingresa la edad de la mascota que buscas:"));
                for( gatito of gatitos) {
                    if(edadIngresada === gatito.edad){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + gatito.nombre + "\n" +
                        "Raza: " + gatito.raza + "\n" +
                        "Edad: " + gatito.edad + "\n" +
                        "Tamaño: " + gatito.tamanio + "\n" +
                        "Lugar: " + gatito.lugar);
                    }   
                }
                break;

            case "4":
                const tamanioIngresado = prompt("Ingresa el tamaño de la mascota que buscas:");
                for( gatito of gatitos) {
                    if(tamanioIngresado === gatito.tamanio){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + gatito.nombre + "\n" +
                        "Raza: " + gatito.raza + "\n" +
                        "Edad: " + gatito.edad + "\n" +
                        "Tamaño: " + gatito.tamanio + "\n" +
                        "Lugar: " + gatito.lugar);
                    }   
                }
                break;

            case "5":
                const lugarIngresado = prompt("Ingresa la ciudad (ubicación) de la mascota que buscas:");
                for( gatito of gatitos) {
                    if(lugarIngresado === gatito.lugar){
                        alert("Hemos encontrado a éstas mascotas que coinciden con tu búsqueda: \n" +
                        "Nombre: " + gatito.nombre + "\n" +
                        "Raza: " + gatito.raza + "\n" +
                        "Edad: " + gatito.edad + "\n" +
                        "Tamaño: " + gatito.tamanio + "\n" +
                        "Lugar: " + gatito.lugar);
                    }   
                }
                break;
            
            default: alert("Escoge una opción de búsqueda válida, intentalo nuevamente");    

        }
    }   else {
        alert("Escoge una opción válida, intentalo nuevamente"); 
    }

    
}
