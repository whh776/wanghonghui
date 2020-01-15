// ! function($) {
class ssk {
    constructor() {
        this.rightInput = $('.ssk_content .content_right .right_input')
        this.a = $('.ssk_content .content_right .right_content a')
        this.li = $('.ssk_content .content_left .li_size a')
    }
    init() {
        // hover 效果
        this.rightInput.focus(() => {
            this.a.hide("slow")
        })
        this.rightInput.blur(() => {
            this.a.show("fast")
        })
        this.li.mouseover(function() {
            $(this).css({ "color": "#ca151d" })
        })
        this.li.mouseout(function() {
            $(this).css({ "color": "#333" })
        })
    }
}

// }(jQuery)
export {
    ssk
}