const nome = document.querySelector('#nome')
const endereco = document.querySelector('#endereco')
const tipoDeImovel = document.querySelector('#tipo')
const telefone = document.querySelector('#numero')
const quantidade = document.querySelector('#quantidade')
const email = document.querySelector('#email')

function simular() {
    window.location.href = `https://api.whatsapp.com/send?phone=5581999701949&text=Nome:%20${nome.value}%20Cidade:%20${endereco.value}%20Tipo%20de%20instalação:%20${tipoDeImovel.value}%20Contato:%20${telefone.value}%20Quantidade%20de%20instalação:%20${quantidade.value}%0AE-mail:%20${email.value}`}