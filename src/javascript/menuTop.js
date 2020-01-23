// ! function($) {
class menuTop {
    constructor() {
        this.menu_top = $('.menu_top');
    }
    init() {
        $.ajax({
            url: "http://localhost/wanghonghui/php/menu.php",
            dataType: 'json'
        }).done(date => {
            let $str = '<ul class="top_ul">'
            $.each(date, function(index, value) {
                if (value.sid >= 100) {
                    $str += `
                            <li>
                                 <a href="details.html?sid=${value.sid}">
                                     <img src="${value.url}" alt="">  
                                 </a>
                            </li>
                                `
                }
            })
            $str += '</ul>'
            this.menu_top.html($str)
        })
    }
}
// }(jQuery);
export {
    menuTop
}