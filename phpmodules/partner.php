<?php

    require_once ("person.php");
    require_once ("objects.php");

    class Partner extends Person{

        protected $srtPuesto;
        
        function __construct(int $dpi, string $name, int $age){
            parent::__construct($dpi, $name, $age);
        }
        public function setPuesto(string $puesto){
            $this->strPuesto = $puesto;
        }
        public function getPuesto():string{
            return $this->strPuesto;
        }
    }

?>

