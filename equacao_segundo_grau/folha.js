function calcular() {
    var tn1 = document.getElementById('txtn1') 
    var tn2 = document.getElementById('txtn2')
    var tn3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    var n1 = Number.parseFloat(tn1.value)
    var n2 = Number.parseFloat(tn2.value)
    var n3 = Number.parseFloat(tn3.value)

    var n1 = n1.toFixed(2)
    var n2 = n2.toFixed(2)
    var n3 = n3.toFixed(2)

    var delta = (n2 ** 2 - 4 * n1 * n3)
    var delta = delta.value

    if (n1 === 0 || delta < 0) {
        res.innerHTML = `<p><strong>Essa Equação não possui Raizes.</strong></p>`
    }else {
        var x1 = -n2 + (Math.sqrt(delta)) / 2 * n1 
        var x2 = -n2 - (Math.sqrt(delta)) / 2 * n1 
        
    }
    res.innerHTML = `<p><strong>X1 = ${x1}</strong></p>`
    res.innerHTML += `<p><strong>X2 = ${x2}</strong></p>`
}