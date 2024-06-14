function showModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Fecha o modal se o usuário clicar fora da área do modal
window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        closeModal();
    }
}
