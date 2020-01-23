class cartlist {
    constructor() {
        this.carContent = $('.carContent_top');
        this.inp = $('ul .num input')
    }
    init() {
        //1.获取本地存储
        if (localStorage.getItem('cartsid') && localStorage.getItem('cartnum')) {
            console.log(localStorage.getItem('cartsid').split(','));
            console.log(localStorage.getItem('cartnum').split(','));
            let csid = localStorage.getItem('cartsid').split(','); //sid
            let cnum = localStorage.getItem('cartnum').split(','); //数量
            for (let i = 0; i < csid.length; i++) {
                this.render(csid[i], cnum[i]);
            }
            $('.num p a:first-child').click(() => {
                // alert(1)
                if (this.inp.val() > 1) {
                    let $num = this.inp.val()
                    $num--
                    this.inp.val($num)
                } else {
                    this.inp.val(1)
                }
            })
            $('.num p a:last-child').click(() => {
                // alert(1)
                let $num = this.inp.val()
                    // console.log($num);
                $num++
                this.inp.val($num)
            })
        }
    }
    render(sid, num) {
        $.ajax({
            url: 'http://localhost/wanghonghui/php/cartlist.php',
            dataType: 'json',
        }).done(date => {
            $.each(date, (index, value) => {
                if (sid == value.sid) {
                    let $clonebox = $('.carContent_top:hidden').clone(true, true);
                    $clonebox.find('.img img').attr('src', value.url);
                    $clonebox.find('.img img').attr('sid', value.sid);
                    $clonebox.find('.title a').html(value.title);
                    $clonebox.find('.title .span').html(value.span);
                    $clonebox.find('.price span').html('¥' + value.price);
                    $clonebox.find('.num input').val(num);
                    $clonebox.find('.allnum').html('¥' + (value.price * num).toFixed(2));
                    $clonebox.show();
                    $('#carContent').append($clonebox);
                    this.allprice(); //在这边调用求和
                }
            });

        })
    }

    //计算总价
    allprice() {
        console.log(1);

        let $goodsnum = 0; //商品的件数
        let $goodsprice = 0; //商品的总价
        $('.carContent_top:visible').each(function(index, element) {
            if ($(element).find('input:checkbox').is(':checked')) {
                $goodsnum += parseInt($(element).find('.num input').val());
                $goodsprice += parseFloat($(element).find('.allnum').html());
            }
        });
        $('.total_choose em').html($goodsnum);
        $('.total_price p .price').html('￥' + $goodsprice);
    }
}
export {
    cartlist
}