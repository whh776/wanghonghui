class cartlist {
    constructor() {
        this.itemlist = $('.item-list');
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
        }
        console.log(1);

        //调用全选方法。
        // this.allselect();
        //值的改变
        // this.valuechange();
        $.ajax({
            url: 'http://localhost/wanghonghui/php/detailsRender.php',
            dataType: 'json'
        }).done(date => {
            console.log(date);
            console.log(1);

        })
    }



    // 
    //2.渲染一条数据的方法
    // render(sid, num) { //sid:当前渲染的购物车列表的编号，num:数量。
    //     $.ajax({
    //         url: 'http://localhost/wanghonghui/php/detailsRender.php',
    //         dataType: 'json'
    //     }).done((data) => {
    //         console.log(data);
    //         $.each(data, (index, value) => {
    //             console.log(value);
    //             // if (sid == value.sid) {
    //             //     let $clonebox = $('.goods-item:hidden').clone(true, true);
    //             //     $clonebox.find('.goods-pic img').attr('src', value.url);
    //             //     $clonebox.find('.goods-pic img').attr('sid', value.sid);
    //             //     $clonebox.find('.goods-d-info a').html(value.title);
    //             //     $clonebox.find('.b-price strong').html(value.price);
    //             //     $clonebox.find('.quantity-form input').val(num);
    //             //     $clonebox.find('.b-sum strong').html((value.price * num).toFixed(2));
    //             //     $clonebox.show();
    //             //     $('.item-list').append($clonebox);
    //             //     this.allprice();
    //             // }
    //         });
    //     });
    // }
    //计算总价
    // allprice() {
    //     let $goodsnum = 0; //商品的件数
    //     let $goodsprice = 0; //商品的总价
    //     $('.goods-item:visible').each(function(index, element) {
    //         if ($(element).find('input:checkbox').is(':checked')) {
    //             $goodsnum += parseInt($(element).find('.quantity-form input').val());
    //             $goodsprice += parseFloat($(element).find('.b-sum strong').html());
    //         }
    //     });
    //     $('.amount-sum em').html($goodsnum);
    //     $('.totalprice').html('￥' + $goodsprice);
    // }

    //全选
    //无法获取元素对象的解决方式
    //1.渲染的下面。
    //2.将事件写入结构中(<div onclick="abc()">12345</div>)。
    //3.事件委托。
    // allselect() {
    //         $('.allsel').on('change', () => {
    //             $('.goods-item:visible').find('input:checkbox').prop('checked', $('.allsel').prop('checked'));
    //             this.allprice(); //求和
    //         });
    //         let $checkinput = $('.goods-item:visible').find('input:checkbox'); //委托的元素。
    //         $('.item-list').on('click', $checkinput, () => {
    //             let $inputs = $('.goods-item:visible').find('input:checkbox');
    //             if ($('.goods-item:visible').find('input:checked').length === $inputs.length) {
    //                 $('.allsel').prop('checked', true);
    //             } else {
    //                 $('.allsel').prop('checked', false);
    //             }
    //             this.allprice(); //求和
    //         });
    //     }
    //文本框值的改变
    // valuechange() {
    //     //++
    //     $('.quantity-add').on('click', function() {
    //         let $num = $(this).prev('input').val();
    //         $num++;
    //         $(this).prev('input').val($num);
    //         $(this).parents('.goods-info').find('.b-sum strong').html(singleprice($(this))); //求单价
    //         local($(this).parents('.goods-info').find('.goods-pic img').attr('sid'), $num); //存储数量
    //     });
    //     //--
    //     $('.quantity-down').on('click', function() {
    //         let $num = $(this).next('input').val();
    //         $num--;
    //         if ($num < 1) {
    //             $num = 1;
    //         }
    //         $(this).next('input').val($num);
    //         $(this).parents('.goods-info').find('.b-sum strong').html(singleprice($(this)));
    //         local($(this).parents('.goods-info').find('.goods-pic img').attr('sid'), $num);
    //     });
    //     //直接输入
    //     $('.quantity-form input').on('input', function() {
    //         let $reg = /^\d+$/;
    //         let $inputvlaue = $(this).val();
    //         if ($reg.test($(this).val())) {
    //             if ($inputvlaue < 1) {
    //                 $(this).val(1)
    //             } else {
    //                 $(this).val($(this).val())
    //             }
    //         } else {
    //             $(this).val(1);
    //         }
    //         $(this).parents('.goods-info').find('.b-sum strong').html(singleprice($(this)));
    //         local($(this).parents('.goods-info').find('.goods-pic img').attr('sid'), $(this).val());
    //     });

    //封装计算单价
    // function singleprice(obj) {
    //     let $dj = parseFloat(obj.parents('.goods-info').find('.b-price strong').html());
    //     let $count = parseFloat(obj.parents('.goods-info').find('.quantity-form input').val());
    //     return $dj * $count.toFixed(2);
    // }

    //改变数量--重新本地存储。
    //通过sid获取数量的位置，将当前改变的值存放到对应的位置。
    // function local(sid, value) { //sid:当前的索引   value：数量
    //     if (localStorage.getItem('cartsid') && localStorage.getItem('cartnum')) {
    //         let arrsid = localStorage.getItem('cartsid').split(',');
    //         let arrnum = localStorage.getItem('cartnum').split(',');
    //         let index = $.inArray(sid, arrsid); //sid在数组中的位置索引。
    //         arrnum[index] = value;
    //         localStorage.setItem('cartnum', arrnum.toString());
    //     }

    // }
    // }

    //删除
    //单条删除
    //删除选中
}
export {
    cartlist
}

/* 
1.clone([Even[,deepEven]])克隆匹配的DOM元素并且选中这些克隆的副本。
一个布尔值（true 或者 false）指示事件处理函数是否会被复制。
一个布尔值，指示是否对事件处理程序和克隆的元素的所有子元素的数据应该被复制。

:hidden   隐藏
:visible  可视

2.is(expr|obj|ele|fn)根据选择器、DOM元素或 jQuery 对象来检测匹配元素集合，如果其中至少有一个元素符合这个给定的表达式就返回true。

3.:checked匹配所有选中的被选中元素(复选框、单选框等，不包括select中的option)

4.prev([expr])取得一个包含匹配的元素集合中每一个元素紧邻的前一个同辈元素的元素集合。
  next([expr])取得一个包含匹配的元素集合中每一个元素紧邻的后面同辈元素的元素集合。



5.parents([expr])取得一个包含着所有匹配元素的祖先元素的元素集合（不包含根元素）。可以通过一个可选的表达式进行筛选。
参数就是需要查找的父元素。





*/