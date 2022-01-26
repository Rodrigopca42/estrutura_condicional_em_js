function confirmar() {
    var tn1 = document.querySelector('#txtn1')
    var res = document.querySelector('#res')

    var n1 = Number.parseFloat(tn1.value)
    
    var n1 = n1.toFixed(2)
    
    var cel = 5 / 9 * (n1 - 32)
    
    var cel = cel.toFixed(2)
    
    res.innerHTML = `<p>A temperatura em Celsius é: ${cel}</p>`
  
}
function confirmar1(){
    var tn2 = document.querySelector('#txtn2')
    var res = document.querySelector('#res')

    var n2 = Number.parseFloat(tn2.value)

    var n2 = n2.toFixed(2)

    var fah = 9 * n2 / 5 + 32

    var fah = fah.toFixed(2)

    res.innerHTML += `<p>A temperatura em fahrenheit é : ${fah}</p>`
}
