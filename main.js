document.getElementById("formulario").addEventListener("submit", crear);

// Función Crear
function crear(e) {
    e.preventDefault();

    let titulo = document.getElementById("titulo").value.trim();
    let descripcion = document.getElementById("descripcion").value.trim();
    let precio = document.getElementById("precio").value.trim();

    // Verificar que los campos del formulario no esten vacios
    if (titulo === '' || descripcion === '' || precio === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    let libro = {
        titulo,
        descripcion,
        precio
    };


    if (localStorage.getItem("Libros") === null) {
        let libros = [];
        libros.push(libro);
        localStorage.setItem("Libros", JSON.stringify(libros));
    } else {
        let libros = JSON.parse(localStorage.getItem("Libros"));
        libros.push(libro);
        localStorage.setItem("Libros", JSON.stringify(libros));
    }
    document.getElementById("formulario").reset();
    leer();
    console.log("Libro guardado correctamente");
}

document.getElementById("formulario").addEventListener("submit", crear);

// Función Crear
function crear(e) {
    e.preventDefault();

    let titulo = document.getElementById("titulo").value.trim();
    let descripcion = document.getElementById("descripcion").value.trim();
    let precio = document.getElementById("precio").value.trim();

    // Verificar que los campos del formulario no esten vacios
    if (titulo === '' || descripcion === '' || precio === '') {
        alert('Todos los campos son obligatorios.');
        return;
    }

    let libro = {
        titulo,
        descripcion,
        precio
    };


    if (localStorage.getItem("Libros") === null) {
        let libros = [];
        libros.push(libro);
        localStorage.setItem("Libros", JSON.stringify(libros));
    } else {
        let libros = JSON.parse(localStorage.getItem("Libros"));
        libros.push(libro);
        localStorage.setItem("Libros", JSON.stringify(libros));
    }
    document.getElementById("formulario").reset();
    leer();
    console.log("Libro guardado correctamente");
}