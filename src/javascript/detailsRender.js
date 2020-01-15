class detailsRender {
    constructor() {
        this.sid = location.search.substring(1).split('=')[1];
        this.left = $('.lp_left');
        this.right = $('.lp_right');
        this.ul = $('.lp_pic_ul ');
        this.li = $('.lp_pic_ul li');
        this.value = $('.addshop_add input')
    }

    init() {
            $.ajax({
                url: 'http://localhost/wanghonghui/php/detailsRender.php',
                data: {
                    sid: this.sid
                },
                dataType: 'json'
            }).done((objdata) => {
                $('#shop .left .pic a').find('img').attr('src', objdata.url);
                $('#shop .left #bf img').attr('src', objdata.url);
                $('.right .right_title h2').html(objdata.title)
                $('.right .right_title p').html(objdata.span)
                $('.right_content .content_price span').html("￥" + objdata.price)
                let $piclist = objdata.urls.split(',');
                let $strhtml = '';
                $.each($piclist, function(index, value) {
                    $strhtml += `<li>
                            <a href="javascript:;">
                                <img src="${value}" alt="">
                            </a>
                        </li>
                        `
                });
                $('.lp .lp_pic .lp_pic_ul').html($strhtml)
            });

            this.addcart();
        }
        //添加购物车操作
    addcart() {
        let goodsnum = [];
        let goodsid = [];

        function getcookie() {
            if (localStorage.getItem('cartnum') && localStorage.getItem('cartsid')) {
                goodsnum = localStorage.getItem('cartnum').split(',');
                goodsid = localStorage.getItem('cartsid').split(',');
            }
        }
        // 点击加减
        $('.addshop_add p a:first-child').click(() => {
            let $num = this.value.val()
            $num++
            this.value.val($num)
        })
        $('.addshop_add p a:last-child').click(() => {
            if (this.value.val() > 1) {
                let $num = this.value.val()
                $num--
                this.value.val($num)
            } else {
                this.value.val(1)
            }
        })

        // 点击传内容
        $('.addshop_xiadan .btn').on('click', () => {
            if (window.confirm("请问是否加入购物车")) {
                getcookie();
                if ($.inArray(this.sid, goodsid) === -1) {
                    goodsid.push(this.sid);
                    localStorage.setItem('cartsid', goodsid);
                    goodsnum.push(this.value.val());
                    localStorage.setItem('cartnum', goodsnum);
                } else {
                    let index = $.inArray(this.sid, goodsid);
                    let newnum = parseInt(goodsnum[index]) + parseInt(this.value.val());
                    goodsnum[index] = newnum;
                    localStorage.setItem('cartnum', goodsnum);
                }
            } else {
                return false
            }
        });
    }
}
export {
    detailsRender
}