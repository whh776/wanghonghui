class registry {
    constructor() {
        this.user = $('input[name="phone"]');
        this.userflag = true;
        this.passlock = true;
        this.twopasslock = true;
    }
    init() {
        // let _this = this;
        //手机号框失去焦点验证
        this.user.on('blur', () => {
            this.phone(this.user);
        })

        // 输入密码判断强度
        $('.input2').on('input', () => {
            this.password($('.input2'));
        })
        $('.input2').on('blur', () => {
            this.passwordtwo($('.input2'));
        })

        // 再次输入密码
        $('.input3').on('blur', () => {
            this.passwordaArgin($('.input3'));
        })

        // 点击按钮提交注册
        $('form').on('submit', () => {

            onsubmit()
        })
    }

    // 输入手机号
    phone(obj) {
        $.ajax({
            type: 'post',
            url: 'http://10.31.152.68/wanghonghui/php/registry.php',
            data: {
                username: this.user.val()
            }
        }).done(result => {
            if (!result && /^1[345678][123456789]\d{8}$/) { //不存在
                $('.span11').html('√').css('color', 'green');
                this.userflag = true;
            } else {
                $('.span11').html('手机号不存在').css('color', 'red');
                this.userflag = false;
            }
        });
    }

    // 输入密码
    password(obj) {
        if (obj.val().length >= 6 && obj.val().length <= 20) {
            let regnum = /\d+/; //数字
            let reglower = /[a-z]+/; //小写字母
            let regupper = /[A-Z]+/; //大写字母
            let other = /[\W\_]+/; //特殊字符
            let count = 0;
            if (regnum.test(obj.val())) {
                count++;
            }
            if (reglower.test(obj.val())) {
                count++;
            }
            if (regupper.test(obj.val())) {
                count++;
            }
            if (other.test(obj.val())) {
                count++;
            }
            switch (count) {
                case 1:
                    $('.span12').html('弱')
                    $('.span12').css('color', 'red')
                    this.passlock = false;
                    break;
                case 2:
                case 3:
                    $('.span12').html('中')
                    $('.span12').css("color", "red")
                    this.passlock = true;
                    break;
                case 4:
                    $('.span12').html('强')
                    $('.span12').css("color", "red")
                    this.passlock = true;
                    break;
            }
        } else {
            $('.span12').html('密码长度有问题')
            $('.span12').css("color", "red")
        }

    }

    // 失去聚焦判断密码是否正确
    passwordtwo(obj) {
        if (obj.val() !== '') {
            if (this.passlock) {
                $('.span12').html('√')
                $('.span12').css("color", "red")
                this.passlock = true;
            }
        } else {
            $('.span12').html('密码不能为空')
            $('.span12').css("color", "red")
            this.passlock = true;
        }
    }

    // 再次输入密码
    passwordaArgin(obj) {
        if (obj.value === $('.input2').value && obj.value != '') {
            $('.span13').html('√')
            $('.span13').css("color", "red")
            this.twopasslock = true;
        } else {
            $('.span13').html('密码不能为空')
            $('.span13').css("color", "red")
            this.twopasslock = false;
        }
    }

    // 点击按钮提交注册
    onsubmit() {
        console.log(1);

        if (this.user.val() == '') {
            $('.span11').html('请输入手机号').css("color", "red");
            this.userflag = false;
        };
        if ($('.input2').val() == '') {
            $('.span12').html('请输入密码').css("color", "red");
            this.passlock = false;
        };
        if ($('.input3').val() == '') {
            $('.span13').html('请再次输入密码').css("color", "red");
            this.twopasslock = false;
        };
        // console.log(this.userflag);
        // console.log(this.passlock);
        // console.log(this.twopasslock);

        if (!this.userflag || !this.passlock || !this.twopasslock) {
            return false;

        }
    }

}
export {
    registry
}