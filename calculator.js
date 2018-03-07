$(document).ready(function() {
  $("input[type=radio]").change(function() {
    if($('.lighttheme').is(":checked")) {
        $('body').css({"background-color":"white"});
    }
    if($('.darktheme').is(":checked")) {
       $('body').css({"background-color":"black"});
    }
  }); 
});


/*-------------------------------------------------------------------*/

  var num = 0; 
  function jsq(num) { // 獲取數字
     if(num=="%"){
          document.getElementById('screenName').value=Math.round(document.getElementById('screenName').value)/100;
      }else{
          document.getElementById('screenName').value += document.getElementById(num).value;
      }
  }
 function eva() {  //等於
     document.getElementById("screenName").value = eval(document.getElementById("screenName").value);
 }
 function clearNum() {  //清除
     document.getElementById("screenName").value = null;
     document.getElementById("screenName").focus();
 }
 function tuiGe() {  //退後
    var arr = document.getElementById("screenName");
     arr.value = arr.value.substring(0, arr.value.length - 1);
 }