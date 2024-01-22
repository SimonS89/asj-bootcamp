document.addEventListener("DOMContentLoaded", () => {
	const tablaAlumnos = document.getElementById("listaAlumnos");
	const formAlumno = document.getElementById("formAlumno")

	listarAlumnos()

	formAlumno.addEventListener("submit", function(e) {
		e.preventDefault();
		const formData = new FormData(this);
		crearEditar(formData)

	})

	function listarAlumnos() {
		fetch("http://localhost:8080/alumnos")
			.then((response) => response.json())
			.then((alumnos) => {
				crearFila(alumnos)
			});
	}


	function eliminarAlumno(id) {
		fetch(`http://localhost:8080/alumnos/${id}`, {
			method: "DELETE",
		})
			.then((data) => {
				location.reload();
			});
	}

	function crearEditar(formData) {
		const id = formData.get("id");
		const alumno = {
			nombre: formData.get("nombre"),
			apellido: formData.get("apellido"),
			nota: formData.get("nota")
		}
		if (id) {
			editarAlumno(id, alumno)
		} else {
			crearAlumno(alumno)
		}
	}

	function editarAlumno(id, alumno) {
		fetch(`http://localhost:8080/alumnos/actualizar/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(alumno),
		})
			.then((response) => response.json())
			.then((data) => {
				listarAlumnos()
				formAlumno.reset();
			})
	}

	function crearAlumno(alumno) {
		fetch("http://localhost:8080/alumnos/crear", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(alumno),
		})
			.then((response) => response.json())
			.then((data) => {
				listarAlumnos()
				formAlumno.reset();
			})
	}

	function agregarBotonEliminar(id) {
		const btnEliminar = document.getElementById(id);
		btnEliminar.addEventListener("click", () => {
			eliminarAlumno(id);
		});
	}

	function crearFila(alumnos) {
		tablaAlumnos.innerHTML = "";
		alumnos.forEach((alumno) => {
			const listItem = document.createElement("tr");
			listItem.innerHTML = `
			<td>${alumno.id}</td>
                  <td>${alumno.nombre}</td>
                  <td>${alumno.apellido}</td>
                  <td>${alumno.nota}</td>
                  <td>
                      <button id="${alumno.id}" ">Eliminar</button>
                  </td>`;
			tablaAlumnos.appendChild(listItem);
			agregarBotonEliminar(alumno.id);
		})
	}

});
