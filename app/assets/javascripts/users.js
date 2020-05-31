$(function(){
  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();    //フォームの値を取得して変数に代入する
    $.ajax({
      type: "GET",    //HTTPメソッド
      url: "/users",  //users_controllerの、indexアクションにリクエストの送信先を設定する
      dataType: "json",
      data: { keyword: input }    //テキストフィールドに入力された文字を設定する
    })
      .done(function(users) {
        console.log("成功です");
      })
      .fail(function() {
        console.log("失敗です");
      });
  });
});