<?php 

    require_once ("index.php");
    require_once ("partner.php");
    require_once ("person.php");

    $objDenichel = new USers("Denichel Reyes", "denichel@hck4u.info", "Admin");
    $objNoah = new USers("Noita Reyes", "noita@hck4u.info", "Client");

    echo $objDenichel->getProfile();

    echo "<br>";
    echo "<br>";

    echo $objNoah->getProfile();

    echo "<br>";
    echo "<br>";

    $objPartner = new Partner(12345, "Carl", 88);
    $objPartner->setPuesto("Admin");
    echo $objPartner->getPersonalD();
    echo "Puesto: ".$objPartner->getPuesto();

?>

