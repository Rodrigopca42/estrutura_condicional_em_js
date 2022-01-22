function conferir(){
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var tn3 = document.getElementById('txtn3')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var n3 = Number(tn3.value)
    if (n1 < n2 && n1 < n3) {
        var menor = n1
    }else if ( n2 < n3) {
        var menor = n2
    }else{
        var menor = n3
    }
    res.innerHTML = `O menor valor é = ${menor}`
}