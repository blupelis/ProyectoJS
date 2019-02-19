<?php

    $name =   $_POST['nombre']; //strip_tags(htmlspecialchars($_POST['nombre']));
    $email_address = $_POST['email']; //strip_tags(htmlspecialchars($_POST['email']));
    $pass = $_POST['pass']; //strip_tags(htmlspecialchars($_POST['pass']));


    $mensajes = "\n".'Nombre: '.$name."\n".'E-mail:'.$email_address."\n".'Contraseña: '.$pass."\n";
     //echo($mensajes);
    $nombre_archivo = "registrados.txt"; 
 
    if(!file_exists($nombre_archivo)){
       echo "El archivo no existe";
    }
    if($archivo = fopen($nombre_archivo, "a")){
        if(fwrite($archivo, $mensajes)){
        }
        else{
            echo "Ha habido un problema al crear el archivo";
        }
        fclose($archivo);
    }
 
 ?>