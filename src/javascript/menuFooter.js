// 接口地址  http://10.31.152.68/wanghonghui/php/menuFooter.php
// ! function($) {
class menuFooter {
    constructor() {
        this.footer_content = $('.footer_content');
    }
    init() {
        $.ajax({
            url: "http://localhost/wanghonghui/php/menuFooter.php",
            dataType: 'json'
        }).done(date => {
            let $footerContent = '<ul class= "footer_content_ul">'
            $.each(date, function(index, value) {
                $footerContent += `
                        <li>
                            <a href="details.html?sid=${value.sid}">
                                <div class="footer_grid">
                                    <p class="footer_img">
                                        <img src="${value.url}">
                                    </p>
                                    <p class="footer_gk">${value.title}</p>
                                    <h4 class="footer_title">${value.span}</h4>
                                    <p class="footer_price">￥${value.price}</p>
                                </div>
                            </a>
                        </li>
                        `
            })
            $footerContent += '</ul>'
            this.footer_content.html($footerContent)
        })
    }
}
// }(jQuery);
export {
    menuFooter
}