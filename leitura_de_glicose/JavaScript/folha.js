function consultar(){
var n1 = document.querySelector('input#txtn1')
var res = document.querySelector('div#res')

var valorGlic = Number.parseFloat(n1.value)
var valorGlic = valorGlic.toFixed(1)

if ( valorGlic < 100 ){
    res.innerHTML = `<p>Sua glicose está à ${valorGlic}mg/dl, e foi classificada como <strong>NORMAL</strong></p>`
}else if  (valorGlic <= 140){
    res.innerHTML = `<p>Sua glicose está à ${valorGlic}mg/dl, e foi classificada como <strong>ELEVADA</strong>, você precisa cuidar da sua saúde!</p>`
}else{
    res.innerHTML = `<p>Sua glicose está à ${valorGlic}mg/dl, e foi classificada como <strong>ELEVADA</strong>, você precisa cuidar da sua saúde!  Não esquece a insulina.</p>`
}

}
