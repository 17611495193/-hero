    // 轮播图动画
    (function(){
        var  lbt_item = document.querySelector('#lbt_item #lbt_test');
        var liItems = document.querySelectorAll('#lbt_index ul li');
        var lbt_cont = document.querySelector('.lbt_cont');
        var index = 1;
        var intervalId = null;
        //检查index的临界值
        function checkIndex (){
            //判断临界值，若index = 6，切回 第二张
            if ( index === 6){
                lbt_item.style.left = '-604px';
                index = 1;
            }
            //如果 index 为0， 表示显示的应该是最后一张，
            //在index的取值上，与5的图像显示的是一致的
            //所以此时平移过去
            if (index === 0){
                lbt_item.style.left = -604 * 5 + 'px';
                index = 5;
            }
        }
        //更新下方索引序号
        function updateLiIndex(){
            //处理对应下面index
            //index在 0和6之外的时候，li对应的是index - 1
            //index === 0的时候，索引是5， 对应下标4
            //index === 6， 索引是1，下标0
            for (var i = 0; i < liItems.length; i++ ){
                liItems[i].className = '';
            }
            if( index === 0){
                liItems[4].className = 'current';
            }else if( index === 6){
                liItems[0].className = 'current';
            }else{
                liItems[ index - 1 ].className = 'current'
            }
        }
        function move (fangxiang){
            fangxiang = fangxiang  || 1;

            //判断临界值
            checkIndex();
            index += fangxiang;
            animate( lbt_item, -604 * index);
            //更新索引
            updateLiIndex();
        }
        intervalId = setInterval( move, 1000);
        lbt_cont.onmouseover = function (){
            clearInterval(intervalId);
        };
        lbt_cont.onmouseout = function (){
            intervalId = setInterval( move, 2000)
        };
        // 处理index 的点击
        for (var i = 0; i < liItems.length; i++){
            liItems[i].onclick = function(){
                //测试单机是否有效
                //alert(1);
                index = this.value;
                animate(lbt_item, -604 * index);
                updateLiIndex();
            }
        }
    })();


    //顶部现实与隐藏的导航
    $(function(){
        $('.image > .main_nav').mouseover(function(){
            console.log('aaaaaaaaa');
            $(this).children('.image_nav_down').show();
        })
        $('.image > .main_nav').mouseleave(function () {
            $(this).children('.image_nav_down').hide();
        })
    })
    //中间新闻部分的切换
    $(function(){
        $('#tab > .tab_item').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('#news .main').eq(index).addClass('selected').siblings().removeClass('selected')
        })
    });
    //广告入口处摸上去有动画的部分
    $(function(){
        $('#enter_ul span').mouseover(function () {
            $(this).stop().animate({
                //top: 134
                opacity: 0.1
            },200)
        });
        $()
        $('#enter_ul span').mouseout(function(){
            $(this).stop().animate({
                opacity: 0.9
            },100)
        })
    });
    //攻略中心左边tab栏切换
    $(function(){
        //var la = $('.ban_left_cont .ban_left_cont');
        //console.log(la)
        $('#nav > .nav_item').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('.ban_left .ban_left_cont').eq(index).addClass('selected').siblings().removeClass('selected')
        })
    });
    //攻略中心右边tab栏切换
    $(function () {

        $('.ban_right_nav > ul > li').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('.ban_right .ban_right_cont').eq(index).addClass('selected').siblings().removeClass('selected');
        })
    })
    //新英雄旋转图
    $(function () {
//      鼠标的移入与移出
        $('#wrap').mouseover(function(){
            $('#arrow').css('opacity', 1);
        })
        $('#wrap').mouseout(function(){
            $('#arrow').css('opacity', 0)
        })
//      新建一个数组，存储所有的类样式
        var classArr = ['slide1', 'slide2','slide3', 'slide4', 'slide5'];
//      获取所有的li
        var $list = $('.slide ul li');
//      下一张
        $('#arrRight').click(function(){
//        取出数组的第一项
            var last = classArr.pop();
//        放到最后一项
            classArr.unshift(last);
            for(var i = 0; i < $list.length; i++){          // 它的整体是一个dom对象，当循环遍历到每一项的时候，就是一个dom对象了
                // 这是一个dom对象
//          $list[i].className = classArr[i];
//          另一种方式
                //   这是jQuery对象的方式
                $list.eq(i).removeClass().addClass(classArr[i]);
            }
        })
//      上一张
        $('#arrLeft').click(function(){
//        把最后一张取出来
            var first = classArr.shift();
//        放到最前面
            classArr.push(first);
//        循环遍历每一个
            for(var i = 0; i < $list.length; i++){
//          dom的方式：
//          $list[i].className = classArr[i];
//          jQuery的方法
                $list.eq(i).removeClass().addClass(classArr[i])
            }
        })
    });
    //新皮肤手风琴效果图
    $(function(){
        $('.parentWrap li').mousemove(function(){
            $('.parentWrap li div').stop().hide(100);
            $(this).children('div').stop().show(200);
        });
        $()
    })
    //回到顶部图标
    $(function(){
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            //如果滚动距离大于 0
            if(scrollTop > 0){
                $('#totop').show();
            }else{
                $('#totop').hide();
            }
        })
        $('#totop').on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            })
        })
    })
