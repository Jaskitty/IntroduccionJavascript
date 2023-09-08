function validarForma(Forrmulario){
    var usuario = Forrmulario.usuario;//el usuario viene del name en HTML
     if(usuario.value == " "|| usuario.value == "Escribir usuario"){
        alert("Debe proporcionar un nombre de usuario");
        usuario.focus();
        usuario.select();
        return false
     }

     var password = forrmulario.password;
     if(password.value == " " || password.value.lenght  < 3){
        alert("Debe proporcionar una contraseña mayor a tres letras");
        password.focus();
        password.select();
        return false;
    }
    var tecnologia = forrmulario.tecnologia;
    var  checkSeleccion = false;

    for(i=0; i< tecnologia.lenght; i++){
        if(tecnologia[i].checked){
            checkSeleccion = true;
        }
    }
    if (!checkSeleccion){
        alert("Debe seleccionar tecnologia");
        return false;
    }

    var genero = forrmulario.genero;
    var radioSeleccion = false;

    for(i=0; i< genero.lenght; i++){
        if(genero[i].checked){
           radioSeleccion = true;
        }
}
    if(!radioSeleccion){
        alert("Debes seleccionar un genero")
    }
    var ocupacion = forrmulario.ocupacion;
    if(ocupacion.value = " "){
        alert("Formulario valido, enviaado datos al servidor");
        return true
    }
}