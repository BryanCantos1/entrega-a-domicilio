
    var NombreRegistro = document.getElementById("txtNombreusuarioRegistro");
    var ApellidoRegistro = document.getElementById("txtApellidoUsuarioregistro");
    var DireccionRegistro = document.getElementById("txtDireccionUsuarioRegistro");
    var EmailRegistro = document.getElementById("txtEmailUsaurioRegistro");
    var btnRegistro = document.getElementById("form");  

    btnRegistro.addEventListener ('submit', function(event){
        event.preventDefault();
        
        if (NombreRegistro.value === null || NombreRegistro.value === "")
        {
            alert("El campo Nombre  esta vacio");
            return false;
        } 
        if (ApellidoRegistro.value === null || ApellidoRegistro.value === "")
        {
            alert("El campo Apellido  esta vacio");
            return false;
        } 
        if (DireccionRegistro.value === null || DireccionRegistro.value === "")
        {
            alert("El campo Nacionalidad  esta vacio");
            return false;
        } 
        if (EmailRegistro.value === null || EmailRegistro.value === "")
        {
            alert("El campo Email  esta vacio");
            return false;
        } 
        else{
            alert("Se ha envado la solcitub");
         location.href="Transacion.html"
        
        } 
        });
   