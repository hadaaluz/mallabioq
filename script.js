// Estado de materias
let materiasAprobadas = {
  quimica1: false,
  quimica2: false
};

// Función para alternar el estado de una materia
function alternarMateria(id) {
  const materia = document.getElementById(id);
  materiasAprobadas[id] = !materiasAprobadas[id];
  materia.classList.toggle("aprobada");

  // Si aprobaste Química I, se habilita Química II
  if (materiasAprobadas["quimica1"]) {
    const quimica2 = document.getElementById("quimica2");
    quimica2.classList.remove("bloqueada");
    quimica2.onclick = () => alternarMateria("quimica2");
  }
}
