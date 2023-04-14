const button = document.querySelector('#reservaButton')
const dataEntrada = document.querySelector('#dataEntrada')
const dataSaida = document.querySelector('#dataSaida')
const adulto = document.querySelector('#nome')
const crianca = document.querySelector('#whatsapp')
const lugar = document.querySelector('#lugares')




function reserva(){
    const entrada = dataEntrada.value.split("-").reverse().join().replace(/,/g, "/")
    const saida = dataSaida.value.split("-").reverse().join().replace(/,/g, "/")

    window.location.href = `https://api.whatsapp.com/send?phone=5581999701949&text=Opção:%20${lugar.value}%0AData%20de%20visita:%20${entrada}%0APrazo%20de%20entrega:%20${saida}%0ANome:%20${adulto.value}%0AWhatsApp:%20${crianca.value}`
}


/* Promoção */
const nome = document.querySelector("#promocaoNome")
const telefone = document.querySelector("#promocaoTelefone")
const email = document.querySelector("#promocaoEmail")

function promocao(){
    console.log('funciona')
    alert('funcionann')
    window.location.href = `https://api.whatsapp.com/send?phone=5581999701949&text=Nome:%20${nome.value}%0ATelefone:%20${telefone.value}%0AEmail:%20${email.value}`
}