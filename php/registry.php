<?php

include "conn.php";

if(isset($_POST['phone'])){
    $phone=$_POST['phone'];
    $result=$conn->query("select * from usertable where phone='$phone'");//如果存在结果，注册的用户名存在。
    if($result->fetch_assoc()){//存在
        echo true;//显示1
    }else{
        echo false;//空隙
    }
}


if(isset($_POST['submit'])){
    $phone=$_POST['phone'];
    $password=sha1($_POST['password']);//后端加密
    // $email=$_POST['email'];

    $conn->query("insert usertable values(null,'$phone','$password',NOW()) ");
    header('location:http://10.31.152.68/wanghonghui/src/login.html');//php页面的跳转。
}