function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
     //var hora = 14
    if (hora > 0 && hora <= 12){
        //bom dia
        msg.innerHTML = `Bom dia! Agoara são ${hora} horas da manhã.`
        img.src='imagem/foto_manha1.png'
        document.body.style.background='#efb838'
    }else if (hora <= 18) {
        //boa tarde
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas da tarde.`
        img.src = 'imagem/foto_tarde1.png'
        document.body.style.background = '#c9b27e'
    }else {
        //boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas da noite.`
        img.src =' imagem/foto_noite1.png'
       document.body.style.background = '#8f2c41'
    }

}