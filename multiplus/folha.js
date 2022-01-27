function confirmar(){
    var agora = new Date()
    var hora = agora.getHours()
    var hora1 = agora.getMinutes()
    var tn1 = document.querySelector('#txtn1')
    var tn2 = document.querySelector('#txtn2')
    var res = document.querySelector('#res')
    var horario = document.querySelector('#horario')

    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    

    if (n1 % n2 == 0 || n2 % n1 == 0){
        res.innerHTML =`*******São Multiplos.********`
        img.setAttribute('src', '1.png')
        res.appendChild(img)
    }else {
        res.innerHTML = `****Não São Multiplos.****`
        img.setAttribute('src', '2.png')
        res.appendChild(img)
    }
    horario.innerHTML = `Olá, fica ligado na hora ${hora}:${hora1}`
}

