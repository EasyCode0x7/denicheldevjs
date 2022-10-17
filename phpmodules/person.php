<?php

    class Person{
        public $intDpi;
        public $strName;
        public $intAge;

        function __construct(int $dpi, string $name, int $age){
            $this->intDpi = $dpi;
            $this->strName = $name;
            $this->intAge = $age;
        }
        public function getPersonalD():string{
            $data = "
            <h2>Personal Data</h2>
            Dpi: {$this->intDpi}<br>
            Name: {$this->strName}<br>
            Age: {$this->intAge}<br>
            ";
            return $data;
        }
        
    } // end Person class.

?>

