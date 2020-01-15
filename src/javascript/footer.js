class footer {
    constructor() {
        this.li = $('.event-float ul li')
        this.ul = $('.event-float')
        this.dalou = $('louceng')
        this.top = $('.hungBar ul li:last-child')
    }
    init() {
        // 滚动滚轮出现
        $(window).scroll(() => {
            let $top = $(window).scrollTop()
            if ($top >= 800) {
                this.ul.show("slow")
            } else {
                this.ul.hide("slow")
            }
        });
        // 
        this.li.on('click', function() {
            //$(this).index():当前操作的元素的索引
            $(this).addClass('active').siblings('li').removeClass('active');
            let $top = $('.louceng').eq($(this).index()).offset().top; //和楼梯对应的楼层的top值。  
            $('html').animate({
                scrollTop: $top
            });
        });
        // 返回頂部
        $(window).scroll(() => {
            let $toptwo = $(window).scrollTop()
            if ($toptwo >= 250) {
                this.top.show("slow")
            } else {
                this.top.hide("slow")
            }
        });
        this.top.click(function() {
            $('html').animate({ scrollTop: 0 }, 500);
            return false
        });
    }
}
export {
    footer
}