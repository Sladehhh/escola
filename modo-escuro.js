document.addEventListener('DOMContentLoaded', function() {
    const botaoModoEscuro = document.getElementById('modo-escuro');
    
    botaoModoEscuro.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        
        // Alterar o texto do botão
        if (document.body.classList.contains('modo-escuro')) {
            botaoModoEscuro.textContent = 'Modo Claro';
        } else {
            botaoModoEscuro.textContent = 'Modo Escuro';
        }
    });
});
