function calcular() {
    var n1 = document.querySelector('input#txtn1')
    var n2 = document.querySelector('input#txtn2')
    var n3 =document.querySelector('input#txtn3')
    var res = document.querySelector('div#res')

    var precoUnit =Number.parseFloat(n1.value)
    var quantidade = Number.parseFloat(n2.value)
    var valRecebido = Number.parseFloat(n3.value)

    var totCompra = precoUnit * quantidade
    var troco = valRecebido - totCompra 
    var falta = totCompra - valRecebido

    var totCompra = totCompra.toFixed(2)
    var troco = troco.toFixed(2)
    var falta = falta.toFixed(2)

    if (valRecebido > totCompra){
        res.innerHTML = `<p><strong><em>Valor Total da Compra : R$${totCompra}</em></strong></p>`
        res.innerHTML += `<p><strong><em>Seu troco : R$${troco}</em></strong></p>`
    }else {
        res.innerHTML = `<p><strong><em>Valor Total da Compra : R$${totCompra}</em></strong></p>`
        res.innerHTML += `<p><strong><em>Valor Insufuciente! Falta: R$${falta}</em></strong></p>`
    }

}
 


