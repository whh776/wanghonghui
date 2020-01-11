// 网址http://10.31.152.68/wanghonghui/php/menuTwoPhone.php
$(document).ready(function() {
    ! function($) {
        class render {
            constructor() {
                this.menu_two_content = $('.menu_two_content');
                // this.menu_two_phone = $('.menu_two_phone');
            }
            init() {
                $.ajax({
                    url: "http://10.31.152.68/wanghonghui/php/menuTwoPhone.php",
                    dataType: 'json'
                }).done(date => {
                    let $menuTwoContent = '<ul class= "menu_two_content_ul">'
                    $.each(date, function(index, value) {
                        if (value.sid > 8) {
                            $menuTwoContent += `
                        <li>
                            <a href="details.html?sid=${value.sid}">
                                <p class="grid-img">
                                    <img src="${value.url}">
                                </p>
                                <h4 class="grid-title">${value.title}</h4>
                                <p class="grid-desc">￥${value.price}</p>
                                <p class="grid-price">${value.span}</p> 
                            </a>
                        </li>
                        `
                        }
                    })
                    console.log($menuTwoContent)
                    this.menu_two_content.html($menuTwoContent)
                })
            }
        }
        new render().init();
    }(jQuery);
})