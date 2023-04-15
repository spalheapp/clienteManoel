const button = document.querySelector('#optionsButton')
const demanda = document.querySelector('#demanda')
const crianca = document.querySelector('#cep')
const adulto = document.querySelector('#nome')
const selecionar = document.querySelector('#selecionar')
const lugar = document.querySelector('#lugares')




function reserva(){

    window.location.href = `https://api.whatsapp.com/send?phone=5581999701949&text=Tipo%20de%20telhado:%20${selecionar.value}%20Categoria%20de%20consumo:%20${lugar.value}%20Demanda:%20${demanda.value}%0ACEP:%20${crianca.value}%20Nome:%20${adulto.value}`
}


/* Promoção */
const nome = document.querySelector("#promocaoNome")
const telefone = document.querySelector("#promocaoTelefone")
const email = document.querySelector("#promocaoEmail")

function promocao(){
    console.log('funciona')
    alert('Receber Promoções')
    window.location.href = `https://api.whatsapp.com/send?phone=5581999701949&text=Nome:%20${nome.value}%0ATelefone:%20${telefone.value}%0AEmail:%20${email.value}`
}