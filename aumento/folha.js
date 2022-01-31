function atualizar() {
    var satual = document.querySelector('#sal')
    var res = document.querySelector('#res')

    var satual = Number.parseFloat(satual.value)
   

    if (satual <= 1000){
        var porcentagem = 20
    }else if(satual <= 3000){
        var porcentagem = 15
    }else if (satual <= 8000){
        var porcentagem = 10
    }else {
        var porcentagem = 5
    }

    var aumento = satual * porcentagem / 100
    
    var novosal = satual + aumento

    var aumento = aumento.toFixed(2)
    var novosal = novosal.toFixed(2)

    res.innerHTML += `<p>A porcentagem aplicada será de ${porcentagem}%</p>`
    res.innerHTML += `<p>O aumento será de R$ ${aumento}</p>`
    res.innerHTML += `<p>O novo salário será de R$ ${novosal}</p>`
    
}