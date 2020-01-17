// 接口地址 http://localhost/wanghonghui/php/menu.php
class render {
    constructor() {
        // this.menu_top = $('.menu_top');
        this.menu_top = document.querySelector('.menu_top')

    }
    init() {
        $.ajax({
            url: "http://10.31.152.68/wanghonghui/php/menu.php",
            dataType: 'json'
        }).done(date => {
            // console.log(date);
            let $str = '<ul>'
            for (let value of date) {
                // console.log(value);
                // if(value.side>=100){}
                $str += `
                    <li>
                         <a href="details.html?sid=${value.sid}">
                             <img src="${value.url}" alt="">  
                         </a>
                    </li>
                        `
            }
            $str += '</ul>'
                // console.log($str);
            this.menu_top.innerHTML = $str
        })
    }
}
new render().init();