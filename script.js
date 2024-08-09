document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    var emailInput = document.getElementById("email");
    var successMessage = document.getElementById("success-message");

    if (emailInput.value) {
        // Exibir a mensagem de sucesso
        successMessage.classList.remove("hidden");
        
        // Limpar o campo de email
        emailInput.value = "";
        
        // Ocultar a mensagem após 3 segundos
        setTimeout(function() {
            successMessage.classList.add("hidden");
        }, 3000);
    }
});
// Efeito Parallax simples ao rolar a página
window.addEventListener('scroll', function() {
    const hero = document.getElementById('hero');
    let offset = window.pageYOffset;
    hero.style.backgroundPositionY = offset * 0.5 + 'px';
});
