// import './sha1.js';
class login {
    constructor() {
        // this.name = $('.username')
    }
    init() {
        $('.button').on('click', function() {
            $.ajax({
                type: 'post',
                url: 'http://localhost/wanghonghui/php/login.php',
                data: {
                    user: $('.username').val(),
                    pass: $('.password').val()
                }
            }).done(function(result) {
                if (result) { //匹配成功
                    location.href = 'index.html';
                    localStorage.setItem('username', $('.username').val());
                } else { //匹配失败
                    $('.password').val('');
                    alert('用户名或者密码错误');
                }
            });
        });
    }
}
export {
    login
}