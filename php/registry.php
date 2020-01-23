<?php

include "conn.php";

if(isset($_POST['username'])){
    $phone=$_POST['username'];
    $result=$conn->query("select * from usertable where phone='$phone'");//如果存在结果，注册的用户名存在。
    if($result->fetch_assoc()){//存在
        echo true;//显示1
    }else{
        echo false;//空隙
    }
}
if(isset($_POST['submit'])){
    $phone=$_POST['phone'];
    $password=$_POST['password'];
    $conn->query("insert usertable values(null,'$phone','$password',NOW())");
    header('location:http://localhost/wanghonghui/src/login.html');//php页面的跳转。
}