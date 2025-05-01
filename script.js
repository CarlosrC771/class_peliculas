var pelicula = prompt("Ingrese tu pelicula favorita:");

if (pelicula == "Harry Potter")
     {
    document.write('<img src="Harrypoter.jpg" alt="Harry Potter" width="1200" height="800">');

} else if (pelicula == "El Señor de los Anillos") {

    document.write('<img src="Señor de los anillos.webp" alt="El Señor de los Anillos" width="1000" height="800">');

} else if (pelicula == "Star Wars") {

    document.write('<img src="luke i am father.jpg" alt="Star Wars" width="200" height="300">');

} else if (pelicula == "El Padrino") {

    document.write('<img src="the godfather.jpg" alt="El Padrino" width="600" height="900">');

} else if (pelicula == "Toy Story") {

    document.write('<img src="toystory.webp" alt="Toy Story" width="1200" height="800">');

} else {

    document.write("Nada te gusta o que ????");
}
