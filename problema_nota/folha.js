function somar(){
    var t1 = window.document.getElementById('txtn1')
    var t2 = window.document.getElementById('txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(t1.value)
    var n2 = Number(t2.value)
    var ver = n1 + n2
    res.innerHTML= `Você atingil a nota: ${ver} pontos `
    if (ver > 60){ 
        res.innerHTML += `<p>Parabéns você foi <strong>APROVADO!</strong></p>`
    }else{
        res.innerHTML += `<p>Infelizmente você está <strong>REPROVADO!</strong></p>`
    }
}