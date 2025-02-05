<?php

require '../vendor/autoload.php';

//Testing index.php
Flight::route("/", function(){
    echo 'Proba123 Aldijana';

});
Flight:: start();
