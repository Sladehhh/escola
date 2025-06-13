document.addEventListener('DOMContentLoaded', function() {
    const carrossel = document.querySelector('.carrossel');
    const imagens = [
        'imagens/escola1.jpg',
        'imagens/escola2.jpg',
        'imagens/escola3.jpg'
    ];
    
    let currentIndex = 0;
    
    function mostrarImagem(index) {
        carrossel.innerHTML = '';
        const img = document.createElement('img');
        img.src = imagens[index];
        img.alt = 'Imagem da escola';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.objectFit = 'cover';
        carrossel.appendChild(img);
    }
    
    function proximaImagem() {
        currentIndex = (currentIndex + 1) % imagens.length;
        mostrarImagem(currentIndex);
    }
    
    // Mostrar a primeira imagem
    mostrarImagem(currentIndex);
    
    // Trocar de imagem a cada 5 segundos
    setInterval(proximaImagem, 5000);
});
