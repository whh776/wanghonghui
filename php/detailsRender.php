<?php
include "conn.php";
if(isset($_GET['sid'])){
    $sid=$_GET['sid'];
    $result=$conn->query("select * from detailsRender where sid=$sid");
    echo json_encode($result->fetch_assoc());
}else{
    exit('非法操作');
}
// include "conn.php";
// $result=$conn->query("SELECT*FROM detailsRender");
// $array=array();
// for($i=0;$i<$result->num_rows;$i++){
//     $array[$i]=$result->fetch_assoc();
// }
// echo json_encode($array); 
?>