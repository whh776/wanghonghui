<?php
include "conn.php";
$result=$conn->query("SELECT*FROM jingpingtuijian");
$array=array();
for($i=0;$i<$result->num_rows;$i++){
    $array[$i]=$result->fetch_assoc();
}
echo json_encode($array); 
?>