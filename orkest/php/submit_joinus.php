<?php
if (!isset($_POST['nom'],$_POST['prenom'])||!isset($_POST['tel'])||!isset($_POST['mobile'])||!isset($_POST['instrument']))
    {
    echo ('Il faut un nom, prénom, numéro de téléphone et le nom de l\'instrument joué');
    return;
    }
    $nom = $_POST['nom'];
    $prenom =$_POST['prenom'];
    $instrument =$_POST['instrument'];
    ?>