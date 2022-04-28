$(function(){
    let myid = $('.myprofile .article-user span').text()
    $('.reple-area textarea').on("propertychange change keyup paste input",function(){
        if($(this).val() != ''){
            $(this).next().prop('disabled', false);
        }
    })

    $('button.push-btn').click(function(){
       $(this).parent().prev().prev().append('<p class="mycomment"><span class="user-id">'+myid+'</span><span class="comment-text">'+$(this).prev().val()+'</span></p>');
       $(this).prev().val('');
    })
})