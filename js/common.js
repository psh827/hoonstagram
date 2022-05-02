$(function(){
    //image변경
    let indexNum = 0;
    let imgArr = $('.inner-image').get();
    function changeImage(){
        if(indexNum == imgArr.length){
            indexNum = 0;
        }
        $(imgArr).removeClass('show');
        $(imgArr[indexNum]).addClass('show');
        indexNum++;
        setTimeout(changeImage, 3000);
    }
    changeImage();
    //id, pw 설정
        let id = '';
        let pw = '';
        let btnLogin = $('button.login-button');
        $('.login-area label input').on("propertychange change keyup paste input",function(){
        if($(this).val() != ''){
            $(this).prev().addClass('inside');
            $(this).addClass('on');
            if($(this).hasClass('invisible')){
                $(this).next().find('button').removeClass('hide');
            }
        }
        else if($(this).val() == ''){
            $(this).prev().removeClass('inside');
            $(this).removeClass('on')
            $(this).next().find('button').addClass('hide');
        }


        if($('.id .input-box').val() != '' && $('.pw .input-box').val().length >= 8){
            btnLogin.addClass('on');
            btnLogin.prop('disabled', false);
        }
        else{
            btnLogin.prop('disabled', true);
            btnLogin.removeClass('on');
        }
    })
    //로그인버튼
    $('.funcText button').click(function(){
        if($(this).text() == '비밀번호표시'){
            $(this).text('숨기기');
            $(this).parent().prev().attr('type', 'text');
        }
        else {
            $(this).text('비밀번호표시');
            $(this).parent().prev().attr('type', 'password');
        }
    })
    //로그인 기능
    //임시 배열로 데이터 생성
    let userdata = {testid: 'korea123', testid2: 'korea456'};
    $('.login-button').click(function(){
        id = $('.id-check').val();
        pw = $('.invisible').val();
            for(let i in userdata){
                if(id == i && pw == userdata[i]){
                    $(location).attr('href', './main.html');
                    return;
                }
                else{
                    alert('아이디와 비밀번호를 확인하세요.')
                }
            }
    });
});
