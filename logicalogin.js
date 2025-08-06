document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const usuario = document.getElementById('usuario').value
    const senha = document.getElementById('senha').value
    const mensagem_erro = document.getElementById('erro')
    const modal = new bootstrap.Modal(document.getElementById('welcomeModal'))
    const usuario_cadastrado = 'fabricio'
    const senha_cadastrada = '123456'

    if (usuario === usuario_cadastrado && senha === senha_cadastrada){
        modal.show()
        setTimeout(function(){window.location.href ='indexbarbearia.html'},3000)
    }else{
        mensagem_erro.textContent="Usuario ou senha incorretos"
        mensagem_erro.style.display='block'
    }

})