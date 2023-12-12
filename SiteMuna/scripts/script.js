document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.cabecalho__menu').classList.toggle('show');
});

document.addEventListener('click', function (event) {
    const mobileMenu = document.querySelector('.cabecalho__menu');
    const mobileMenuToggle = document.getElementById('mobile-menu');

    if (!mobileMenu.contains(event.target) && event.target !== mobileMenuToggle) {
        // Fecha o menu se o clique não estiver dentro do menu ou no ícone do hamburguer
        mobileMenu.classList.remove('show');
    }
});