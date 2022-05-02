function checkOrNot(elem, className){
    $(elem).click(function(){
        $(this).toggleClass(className);
    })
}

function onPushBtn(elem, property){
  $(elem).on("propertychange change keyup paste input", function(){
    if ($(this).val() != "") {
      $(this).next().prop(property, false);
    } else {
      $(this).next().prop(property, true);
    }
  }) ;
}
