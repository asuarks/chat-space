$(function(){
  function addUser(user) {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
      </div>
    `
  }
  function addNoUser() {
    let html = `
      <div class="chat-group-user clearfix">
        <p class="chat-group-user__name">ユーザーが見つかりません</p>
      </div>
    `
  }

  $("#user-search-field").on("keyup", function(){
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      dataType: "json",
      data: { keyword: input }
    })
      .done(function(users) {
        $("#user-search-result").empty(); //emptyメソッドで一度検索結果を空にする

        if (users.length !== 0) {        //usersが空かどうかで条件分岐
          users.forEach(function(user) { //配列オブジェクト１つ１つに対する処理
            addUser(user);               //引数に値が入っていた場合に、ビューに追加するためのHTMLを作成
          });
        } else if (input.length == 0) {
          return false;
        } else {
          addNoUser();
        }
      })
      .fail(function() {
        console.log("失敗です");
      });
  });
});