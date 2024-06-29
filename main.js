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

//Funcion Editar
function editar(titulo) {
    let libros = JSON.parse(localStorage.getItem("Libros"));
    for (let i = 0; i < libros.length; i++) {
        if (libros[i].titulo === titulo) {
            document.getElementById("body").innerHTML =
                `
            <div class="row">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-header">
                            <h2>Editar libro</h2>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                    <input type="text" id="newtitulo" class="form-control my-3" placeholder="${libros[i].titulo}">
                                </div>
                                <div class="form-group">
                                    <textarea id="newdescripcion" class="form-control my-3" placeholder="${libros[i].descripcion}"></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="number" id="newprecio" class="form-control my-3" placeholder="${libros[i].precio}">
                                </div>
                            </form>
                            <button class="btn btn-success" onclick="actualizar('${i}')">Actualizar</button>
                            <button class="btn btn-primary" onclick="VistaPrincipal()">Cancelar</button>
                        </div>
                    </div>

            `

        }
    }
}