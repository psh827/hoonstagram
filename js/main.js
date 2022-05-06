$(function () {
  let myid = $(".myprofile .article-user span").text();
  //textarea에 변화가 생기면 게시버튼이 활성화 되는 버튼
  onPushBtn(".reple-area textarea", "disabled");

  // $(".reple-area textarea").on(
  //   "propertychange change keyup paste input",
  //   function () {
  //     if ($(this).val() != "") {
  //       $(this).next().prop("disabled", false);
  //     } else {
  //       $(this).next().prop("disabled", true);
  //     }
  //   }
  // );
  //게시버튼 클릭시 댓글 추가기능
  $("button.push-btn").click(function () {
    $(this)
      .parent()
      .prev()
      .prev()
      .append(
        '<p class="mycomment"><a href="#" class="user-id">' +
          myid +
          '</a><span class="comment-text">' +
          $(this).prev().val() +
          '</span><span class="comment-logo"><i class="fa-regular fa-heart fa-sm"></i></span></p>'
      );
    $(this).prev().val("");
    $(this).prop("disabled", true);
  });
  //좋아요 클릭시 빨간색으로 변경, 좋아요 숫자 변경
  $(document).on("click", ".fa-heart", function () {
    //좋아요 갯수 가져오기
    let likecount = "";
    //두번째 세번째 댓글 좋아요오류(좋아요가 눌리지않는 오류)를 위한 예외 처리.
    if ($(this).hasClass("like") == true) {
      likecount = $(this)
        .parents(".photo")
        .next()
        .find("span")
        .text()
        .split(" ")[1]
        .split("개")[0];
    }

    //span tag 지정 변수
    let spantext = $(this).parents(".photo").next().find(".like").find("span");

    //좋아요 갯수 숫자화
    likecount = Number(likecount);

    $(this).toggleClass("fa-solid");
    if ($(this).hasClass("fa-solid")) {
      if ($(this).hasClass("nav-heart")) {
        $(this).css("color", "black");
      } else {
        $(this).css("color", "#ED4956");
      }
      if ($(this).hasClass("fa-xl")) {
        spantext.text("좋아요 " + (likecount + 1) + "개");
      }
    } else {
      $(this).css("color", "black");
      spantext.text("좋아요 " + (likecount - 1) + "개");
    }
    return false;
  });
  //북마크
  $(".fa-bookmark").click(function () {
    $(this).toggleClass("fa-solid");
  });

  //하트
  $(".nav-heart").click(function () {
    $(".push-heart-area").toggleClass("on");
  });

  $(".main-photo").each(function () {
    let circleLeng = $("ul li", this).length;
    let circleplace = $(this).next().find(".photo-circle");
    if (circleLeng > 1) {
      for (let i = 0; i < circleLeng; i++) {
        if (i == 0) {
          circleplace.append("<span class='circle active'></span>");
        } else {
          circleplace.append("<span class='circle'></span>");
        }
      }
    }
  });

  const widthNum = 614;
  const caInner = $(".main-photo");
  $(".btn").each(function () {
    actionBtn($(this));
  });
  function actionBtn(el) {
    el.click(function () {
      let caInMarginLeft = parseInt($(".main-photo").css("margin-left"));
      let isAni = $(".main-photo").is(":animated");
      if (el.attr("id") == "carousel-prev") {
        if (!isAni) {
          caInner.animate(
            { marginLeft: caInMarginLeft + widthNum },
            function () {
              $("ul.column li:last", caInner).prependTo(
                ".main-photo ul.column"
              );
              caInner.css("margin-left", -widthNum);
              // initialFunc("prev");
            }
          );
        }
      } else {
        if (!isAni) {
          caInner.animate(
            { marginLeft: caInMarginLeft - widthNum },
            function () {
              $("ul.column li:first", caInner).appendTo(
                ".main-photo ul.column"
              );
              // caInner.css("margin-left", -widthNum);
              // initialFunc("next");
            }
          );
        }
      }
    });
  }

  //이미지 슬라이드
  // $("button.next-btn").click(function () {
  //   let photowidth = $(".photo .main-photo ul li").width();
  //   console.log(photowidth);
  //   let maincontent = $(this).prev().find(".slide-photo");
  //   console.log(maincontent);
  //   let photoLeng = maincontent.length;
  //   let maxwidth = photowidth * photoLeng;
  //   console.log(-maxwidth);
  //   let thiswidth = parseInt(maincontent.css("margin-left"));
  //   console.log(thiswidth);
  //   if (thiswidth >= -maxwidth) {
  //     maincontent.animate(
  //       { marginLeft: thiswidth - photowidth },
  //       function () {}
  //     );
  //   }
  // });
});
