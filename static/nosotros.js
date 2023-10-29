// Obtenemos los botones y los elementos de Misión y Visión
const toggleButton = document.getElementById("toggle-mission-vision");
const mission = document.getElementById("mission");
const vision = document.getElementById("vision");

// Variable para rastrear el estado actual
let isMissionDisplayed = true;

// Función para alternar entre Misión y Visión
function toggleMissionVision() {
    if (isMissionDisplayed) {
        mission.style.display = "none";  // Ocultar Misión
        vision.style.display = "block";   // Mostrar Visión
        toggleButton.textContent = "Mostrar Misión";
    } else {
        mission.style.display = "block";  // Mostrar Misión
        vision.style.display = "none";    // Ocultar Visión
        toggleButton.textContent = "Mostrar Visión";
    }
    isMissionDisplayed = !isMissionDisplayed; // Cambiar el estado
}

// Agregamos un controlador de eventos al botón para alternar Misión/Visión
toggleButton.addEventListener("click", toggleMissionVision);
