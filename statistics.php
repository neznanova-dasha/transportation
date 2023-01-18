<?php
    $file = file('statistics.txt');
    $request = $_GET;
    $quantity = $file[0];
    $ip = explode(" ", $file[1]);
    if(isset($_GET['visited'])) {
        if(!in_array($_SERVER['REMOTE_ADDR'],$ip)) {
            array_push($ip, $_SERVER['REMOTE_ADDR']);
            $ip = implode(" ",$ip);
            ++$quantity;
            $str = "$quantity\n$ip";
            file_put_contents('statistics.txt', $str);
        }
    }
    if($file){
        echo "<h1>$file[0]</h1>
        <h2>$file[1]</h2>";
    }
?>