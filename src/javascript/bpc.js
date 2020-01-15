// ! function($) {
class bpc {
    constructor() {
        this.twoli = $('.bpc_content .bpc_nav .nav_ol li')
        this.ol = $('.bpc_content .bpc_nav .nav_ol li .two_list')
        this.baidu = $('.baidu');
        this.picli = $('.bpc_ul ul li');
        this.btnli = $('.bpc_ul ol li');
        this.left = $('.bpc_button .button_left');
        this.right = $('.bpc_button .button_right');
        this.num = 0; //当前点击的索引
        this.piclilength = this.picli.size();
        this.timer = null;
    }
    init() {
        // 二级导航显示隐藏

        this.twoli.on("mouseover", () => {
            this.ol.css({
                "display": "block"
            })
        })
        this.twoli.on("mouseout", () => {
                this.ol.css({
                    "display": "none"
                })
            })
            // 轮播图
        this.right.on('click', () => {
            this.num++;
            // if (this.num > this.piclilength - 1) {
            //     this.num = 0;
            // }
            this.tabswitch();
            console.log(this.num);

            console.log(1);

        });
        //  tabswitch

    }
    tabswitch() {
        // this.btnli.eq(this.num).addClass('active').siblings(this.btnli).removeClass('active');


        // this.picli.eq(this.num).animate({ opacity: 1 }).siblings(this.picli).animate({ opacity: 0 });


        this.picli.eq(this.num).show().siblings(this.picli).hide()
    }
}
// }(jQuery)
export {
    bpc
}