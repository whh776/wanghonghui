// ! function($) {
class header {
    constructor() {
        this.kgpic = $('.kgt_content');
        this.kgspan = $('.kgt_content span');
        this.a = $('.header_content li a');
        this.ol = $('.content_left_ul_ol');
        this.xiala = $('.content_left_ul li:last-child');
        this.olOne = $('.content_right_ul .xiala_hover_one');
        this.olOneOl = $('.content_right_ul .xiala_hover_one ol');
    }
    init() {
        // 点击关闭广告
        $('#kgt').ready(() => {
            this.kgspan.click(() => {
                this.kgpic.hide("slow")
            })
        })

        // 字体变色
        this.a.hover(
                function() {
                    $(this).css({ "color": "#ca151d" })
                },
                function() {
                    $(this).css({ "color": "#a4a4a4" })
                })
            // 下拉效果
        this.xiala.hover(
            () => {
                this.ol.show("slow")
            },
            () => {
                this.ol.hide("slow")
            })
        this.olOne.hover(
            () => {
                this.olOneOl.show("slow")
            },
            () => {
                this.olOneOl.hide("slow")

            })
    }
}
new header().init();
// }(jQuery);
// export {
//     header
// }