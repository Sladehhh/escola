document.getElementById("formRegistro").addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const res = await fetch("/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
    });

    if (res.ok) {
        window.location.href = "index30.html";
    } else {
        alert("Erro ao registrar.");
    }
});

function entrarSemCadastro() {
    window.location.href = "index30.html";
}

