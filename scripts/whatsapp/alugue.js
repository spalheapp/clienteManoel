const nome = document.querySelector('#nome')
const endereco = document.querySelector('#cidade')
const tipoDeImovel = document.querySelector('#tipo')
const telefone = document.querySelector('#numero')
const quantidade = document.querySelector('#instalação')
const email = document.querySelector('#email')

function simular() {
    window.location.href = `https://api.whatsapp.com/send?phone=558199701949&text=Nome:%20${nome.value}%Cidade:%20${endereco.value}%0ATipo:%20${tipoDeImovel.value}%0AContato:%20${telefone.value}%Instalação:%20${quantidade.value}%0AE-mail:%20${email.value}`}