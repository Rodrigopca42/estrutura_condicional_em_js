function converter(){
var tn1 = document.querySelector('#txtn1')
var tn2 = document.querySelector('#txtn1')
var res = document.querySelector('#res')
 
var fa = Number.parseFloat(tn1.value)
var ce = Number.parseFloat(tn2.value)

var esc = document.getElementsByName('radtem')

var img = document.createElement('img')
img.setAttribute('id','foto')




if ( esc[0].checked){
    var c = 5 / 9 * (fa -32)
    var c = c.toFixed(2)
    res.innerHTML = `A Temperatura equivalente em Celsius é ${c}º`
    img.setAttribute('src', 'celsius.png')

}else {
    var f = 9 * ce / 5 + 32
    var f = f.toFixed(2)
    res.innerHTML = `A Temperatura em Fahrenheit é º${f}`
    img.setAttribute('src', 'fahrenheit.png')
}
    res.appendChild(img)
}