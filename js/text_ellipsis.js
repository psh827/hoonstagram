$(function () {
  let elem = $(".comment-main-text span");
  const showText = 20;
  let moreBtnText = "더보기";
  let lessBtnText = "간략히";
  // elem = document.body.getElementsByClassName('more-text');
  // for(let i = 0; i < elem.length; i++){
  //     let content = elem[i].html();
  // }

  elem.each(function (i) {
    console.log(i);
    let content = $(this).html();
    let contentLeng = content.length;
    let lessText = content.substr(0, showText);
    let moreText = content.substr(showText, contentLeng);
    let changeHtml = "";
    if (showText < contentLeng) {
      changeHtml = `${lessText} <span>...</span><span class="more-content"><span>${moreText}</span><a class="more-btn active"><span>${moreBtnText}</span></a></span>`;
      $(this).html(changeHtml);
      if (i == 0) {
        console.log(i);
        console.log($(this));
        console.log($(this).attr("class"));
        $(this).html(changeHtml);
      } else if (i == 1) {
        console.log(i);
        console.log($(this));
        console.log($(this).attr("class"));
        $(this).html(changeHtml);
      } else {
        console.log(i);
        console.log($(this));
        console.log($(this).attr("class"));
        $(this).html(changeHtml);
      }
    }
  });

  $(".more-btn").click(function (e) {
    let check = $(this).hasClass("active");
    if (check) {
      $(this).removeClass("active");
      $(this).html(``);
    } else {
      $(this).addClass("active");
      $(this).html(`<span>${moreBtnText}</span>`);
    }
    $(this).prev().toggle();
    $(this).parent().prev().toggle();
  });
});
