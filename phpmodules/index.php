<?php 

    class USers{

        private $strName;
        private $strEmail;
        private $strType;
        private $srtPasswd;
        protected $registeredTime;
        static $strStatus = "Active";

        function __construct(string $name, string $email, string $type){
            $this->strName = $name;
            $this->strEmail = $email;
            $this->strType = $type;
            $this->strPasswd = rand();
            $this->registeredTime = date('Y-M-D H:M:S');
        }

        /* si las variables que se declaran al inicio de la clase estan seteadas como private, protected o static,
        se procedera a colocar la palabra clave "public" al inicio de cada funcion.*/
        public function getName():string{
            return this->$name;
        }
        public function getEmail():string{
            return this->$email;
        }

        public function getProfile(){
            echo "Users data <br>";
            echo "Name: ".$this->strName."<br>";
            echo "Email: ".$this->strEmail."<br>";
            echo "Status: ".$this->strType."<br>";
            echo "Password: ".$this->strPasswd."<br>";
            echo "Registered since: ".$this->registeredTime."<br>";
        }
    }

?>

