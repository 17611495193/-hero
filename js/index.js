    // �ֲ�ͼ����
    (function(){
        var  lbt_item = document.querySelector('#lbt_item #lbt_test');
        var liItems = document.querySelectorAll('#lbt_index ul li');
        var lbt_cont = document.querySelector('.lbt_cont');
        var index = 1;
        var intervalId = null;
        //���index���ٽ�ֵ
        function checkIndex (){
            //�ж��ٽ�ֵ����index = 6���л� �ڶ���
            if ( index === 6){
                lbt_item.style.left = '-604px';
                index = 1;
            }
            //��� index Ϊ0�� ��ʾ��ʾ��Ӧ�������һ�ţ�
            //��index��ȡֵ�ϣ���5��ͼ����ʾ����һ�µ�
            //���Դ�ʱƽ�ƹ�ȥ
            if (index === 0){
                lbt_item.style.left = -604 * 5 + 'px';
                index = 5;
            }
        }
        //�����·��������
        function updateLiIndex(){
            //�����Ӧ����index
            //index�� 0��6֮���ʱ��li��Ӧ����index - 1
            //index === 0��ʱ��������5�� ��Ӧ�±�4
            //index === 6�� ������1���±�0
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

            //�ж��ٽ�ֵ
            checkIndex();
            index += fangxiang;
            animate( lbt_item, -604 * index);
            //��������
            updateLiIndex();
        }
        intervalId = setInterval( move, 1000);
        lbt_cont.onmouseover = function (){
            clearInterval(intervalId);
        };
        lbt_cont.onmouseout = function (){
            intervalId = setInterval( move, 2000)
        };
        // ����index �ĵ��
        for (var i = 0; i < liItems.length; i++){
            liItems[i].onclick = function(){
                //���Ե����Ƿ���Ч
                //alert(1);
                index = this.value;
                animate(lbt_item, -604 * index);
                updateLiIndex();
            }
        }
    })();


    //������ʵ�����صĵ���
    $(function(){
        $('.image > .main_nav').mouseover(function(){
            console.log('aaaaaaaaa');
            $(this).children('.image_nav_down').show();
        })
        $('.image > .main_nav').mouseleave(function () {
            $(this).children('.image_nav_down').hide();
        })
    })
    //�м����Ų��ֵ��л�
    $(function(){
        $('#tab > .tab_item').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('#news .main').eq(index).addClass('selected').siblings().removeClass('selected')
        })
    });
    //�����ڴ�����ȥ�ж����Ĳ���
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
    //�����������tab���л�
    $(function(){
        //var la = $('.ban_left_cont .ban_left_cont');
        //console.log(la)
        $('#nav > .nav_item').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('.ban_left .ban_left_cont').eq(index).addClass('selected').siblings().removeClass('selected')
        })
    });
    //���������ұ�tab���л�
    $(function () {

        $('.ban_right_nav > ul > li').mouseover(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            $('.ban_right .ban_right_cont').eq(index).addClass('selected').siblings().removeClass('selected');
        })
    })
    //��Ӣ����תͼ
    $(function () {
//      �����������Ƴ�
        $('#wrap').mouseover(function(){
            $('#arrow').css('opacity', 1);
        })
        $('#wrap').mouseout(function(){
            $('#arrow').css('opacity', 0)
        })
//      �½�һ�����飬�洢���е�����ʽ
        var classArr = ['slide1', 'slide2','slide3', 'slide4', 'slide5'];
//      ��ȡ���е�li
        var $list = $('.slide ul li');
//      ��һ��
        $('#arrRight').click(function(){
//        ȡ������ĵ�һ��
            var last = classArr.pop();
//        �ŵ����һ��
            classArr.unshift(last);
            for(var i = 0; i < $list.length; i++){          // ����������һ��dom���󣬵�ѭ��������ÿһ���ʱ�򣬾���һ��dom������
                // ����һ��dom����
//          $list[i].className = classArr[i];
//          ��һ�ַ�ʽ
                //   ����jQuery����ķ�ʽ
                $list.eq(i).removeClass().addClass(classArr[i]);
            }
        })
//      ��һ��
        $('#arrLeft').click(function(){
//        �����һ��ȡ����
            var first = classArr.shift();
//        �ŵ���ǰ��
            classArr.push(first);
//        ѭ������ÿһ��
            for(var i = 0; i < $list.length; i++){
//          dom�ķ�ʽ��
//          $list[i].className = classArr[i];
//          jQuery�ķ���
                $list.eq(i).removeClass().addClass(classArr[i])
            }
        })
    });
    //��Ƥ���ַ���Ч��ͼ
    $(function(){
        $('.parentWrap li').mousemove(function(){
            $('.parentWrap li div').stop().hide(100);
            $(this).children('div').stop().show(200);
        });
        $()
    })
    //�ص�����ͼ��
    $(function(){
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            //�������������� 0
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
