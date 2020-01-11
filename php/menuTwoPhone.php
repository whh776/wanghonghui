<?php
 
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Method:POST,GET');
//利用头文件设置中文编码
header('content-type:text/html;charset=utf-8');
//1.php连接数据库
//$conn=new mysqli(主机,用户名,密码,数据库名称);
define('HOST','localhost');//主机 或者 127.0.0.1
define('USERNAME','root');//用户名
define('PASSWORD','');//密码
define('DBNAME','test1912');//数据库名称

$conn=@new mysqli(HOST,USERNAME,PASSWORD,DBNAME);//连接数据库
//@:容错处理，错误信息不显示。
if($conn->connect_error){//如果存在错误，输出错误。
    die('数据库连接错误,错误信息：'.$conn->connect_error);
}
$conn->query('SET NAMES UTF8');

// 增加
$sql="INSERT phone VALUES(null,'https://res0.vmallres.com/pimages//product/6901443320394/428_428_1563504284133mp.png','荣耀9X PRO','优惠200 128GB版送配件','1999'";
$conn->query($sql);
// 
$result=$conn->query("SELECT * FROM phone");
$array=array();
for($i=0;$i<$result->num_rows;$i++){
    $array[$i]=$result->fetch_assoc();
}
echo json_encode($array); 
?>