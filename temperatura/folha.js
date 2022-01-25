

function confirmar (){
    var esc = document.querySelector('input#texto')
    var res = document.querySelector('div#res')
    var calc = document.querySelector('article#calc')


    var temp = esc.value

    if (temp === "F"){

        calc.innerHTML = `<p id="p1">Fahrenheit: <input type="number" name="fah" id="Fah"></p>`
        calc.innerHTML += `<input type="button" value="converter" onclick="converter()"></input>`

       
    }else  if (temp === "C"){
        calc.innerHTML = `<p id="p2">Celsios: <input type="number" name="cel" id="cel"></p>`
        calc.innerHTML += `<input type="button" value="converter" onclick="converter()"></input>`

       

       }
    }
    function converter(){
        var fah = document.querySelector('input#Fah')
        var fah = Number.parseFloat(fah.value)

        var c = 5 / 9 * (fah - 32)
       

        res.innerHTML = `Temperatura equivalente em Celsius: ${c}`


   }
   function converter(){
    var cel = document.querySelector('input#cel')
    var cel = Number.parseFloat(cel.value)

    var f = 9 * cel / 5 + 32

    res.innerHTML = `Temperatura equivalente em Celsius: ${f}`
}







