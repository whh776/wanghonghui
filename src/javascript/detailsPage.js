// ! function($) {

class detailsPage {
    constructor() {
        this.shop = $('#shop');
        this.spic = $('.pic');
        this.sf = $('#sf');
        this.bf = $('#bf');
        this.bpic = $('#bf img');
        this.left = $('.lp_left');
        this.right = $('.lp_right');
        this.ul = $('.lp_pic_ul ');
        this.li = $('.lp_pic_ul li');
        // console.log(document.querySelector('.lp_pic_ul'));
        // console.log(document.querySelector('.lp_pic_ul li'));
        // console.log(document.querySelector('.lp_right'));
        // console.log(document.querySelector('.lp_left'));

    }
    init() {
        let _this = this;
        // 放大镜
        this.spic.hover(() => {
            $('#sf,#bf').css('visibility', 'visible');
            this.sf.css({
                width: this.spic.outerWidth() * this.bf.outerWidth() / this.bpic.outerWidth(),
                height: this.spic.outerHeight() * this.bf.outerHeight() / this.bpic.outerHeight()
            });
            this.bili = this.bpic.outerWidth() / this.spic.outerWidth();
            this.spic.on('mousemove', (e) => {
                let $l = e.pageX - this.shop.offset().left - this.sf.width() / 2;
                let $t = e.pageY - this.shop.offset().top - this.sf.height() / 2;
                if ($l < 0) {
                    $l = 0;
                } else if ($l >= this.spic.outerWidth() - this.sf.outerWidth()) {
                    $l = this.spic.outerWidth() - this.sf.outerWidth() - 2;
                }
                if ($t < 0) {
                    $t = 0;
                } else if ($t >= this.spic.outerHeight() - this.sf.outerHeight()) {
                    $t = this.spic.outerHeight() - this.sf.outerHeight() - 2;
                }
                this.sf.css({
                    left: $l,
                    top: $t
                });
                this.bpic.css({
                    left: -$l * this.bili,
                    top: -$t * this.bili
                });
            });
        }, () => {
            $('#sf,#bf').css('visibility', 'hidden');
        });
        // 交换图片
        this.ul.on('click', 'li', function() {
            let $imgurl = $(this).find('img').attr('src');
            _this.spic.find('img').attr('src', $imgurl).css({
                width: "450px",
                height: "450px"
            });
            _this.bpic.attr('src', $imgurl);
        });
        let $num = 5;
        let $liwidth = this.li.eq(0).outerWidth(true);
        if (this.li.size() <= $num) {
            this.right.show();
        }
        // 左右点击轮播
        let $liLength = this.ul.find('li').length

        this.right.on('click', () => {
            console.log(1);

            if (this.ul.li.length >= $num) {
                // console.log(this.li.length);
                console.log(2);

                $num++;
                this.left.show();
                if ($num === this.li.length) {
                    this.right.hide();
                }
                this.ul.animate({
                    left: -($num - 5) * $liwidth
                });
            }

        });
        // 左边
        this.left.on('click', () => {
            if ($num > 5) {
                $num--;
                this.right.show();
                if ($num === 5) {
                    this.left.hide();
                }
                this.ul.animate({
                    left: -($num - 5) * $liwidth
                });
            }
        });
    }
}
export {
    detailsPage
}