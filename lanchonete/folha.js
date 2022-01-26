function compra() {
var cod = document.querySelector('#cod')
var quan = document.querySelector('#quan')
var res = document.querySelector('#res')

var cod = Number(cod.value)
var quan = Number.parseFloat(quan.value)

 

switch(cod){
    case 1:
        var cal = quan * 5.00
        var cal = cal.toFixed(2)
        res.innerHTML = `O valor da compra é R$ ${cal}`
          break
    case 2:
        var cal = quan * 3.50
        var cal = cal.toFixed(2)
        res.innerHTML = `O valor da compra é R$ ${cal}`
        break
    case 3:
        var cal = quan * 4.80
        var cal = cal.toFixed(2)
        res.innerHTML = `O valor da compra é R$ ${cal}`
        break
    case 4:
        var cal = quan * 8.90
        var cal = cal.toFixed(2)
        res.innerHTML = `O valor da compra é R$ ${cal}`
        break
    case 5:
        var cal = quan * 7.32
        var cal = cal.toFixed(2)
        res.innerHTML = `O valor da compra é R$ ${cal}`
        break
    default:
        res.innerHTML = '[ERRO] código inválido'
}


}