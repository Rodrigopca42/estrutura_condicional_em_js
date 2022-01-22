function confirmar(){
    var tn1 = document.getElementById('txtn1')
    var res = document.getElementById('res')
    var minutos = Number(tn1.value)
    var valorPago = 50.00
    if (minutos > 100){
        var valorPago = valorPago + 2 * (minutos - 100)
    }
    res.innerHTML = `R$ ${valorPago},00`
}