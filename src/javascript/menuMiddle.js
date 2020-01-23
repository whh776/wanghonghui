// ! function($) {
class menuMiddle {
    constructor() {
        this.middle_left = $('.middle_left');
        this.middle_right = $('.middle_right');
    }
    init() {
        $.ajax({
            url: "http://localhost/wanghonghui/php/menu.php",
            dataType: 'json'
        }).done(date => {
            let $middleLeft = ''
            let $str = '<ul class= "right_ul">'

            $.each(date, function(index, value) {
                if (value.sid <= 8 && value.sid >= 1) {
                    $str += `
                            <li>
                                <a href="details.html?sid=${value.sid}">
                                    <p class="grid-img">
                                        <img src="${value.url}">
                                    </p>
                                    <h4 class="grid-title">${value.title}</h4>
                                    <p class="grid-price">${value.span}</p>
                                    <p class="grid-desc">￥${value.price}</p>
                                </a>
                            </li>
                        `
                } else if (value.sid == 0) {
                    $middleLeft += `
                            <a href="details.html?sid=${value.sid}">
                                <img src="${value.url}">
                            </a>
                            `
                }
            })
            $str += '</ul>'
            this.middle_left.html($middleLeft)
            this.middle_right.html($str)
        })
    }
}

// }(jQuery);
export {
    menuMiddle
}