// 接口地址  http://10.31.152.68/wanghonghui/php/lbpic.php
// ! function($) {
class lbpic {
    constructor() {
        this.lbPic = $('#lbPic');
    }
    init() {
        $.ajax({
            url: "http://10.31.152.68/wanghonghui/php/lbpic.php",
            dataType: 'json'
        }).done(date => {
            let $lbPicStr = '<ul class= "lbPic_ul">'
            $.each(date, function(index, value) {
                $lbPicStr += `
                        <li>
                            <a href="details.html?sid=${value.sid}">
                                <img src="${value.url}">
                            </a>
                        </li>
                        `
            })
            $lbPicStr += '</ul>'
            this.lbPic.html($lbPicStr)
        })
    }
}
// }(jQuery);

export {
    lbpic
}