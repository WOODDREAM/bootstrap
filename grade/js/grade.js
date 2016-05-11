$('#login').on('click', function () {
    var mobile = $("#loginMobile").val();
    var passWord = $("#loginPassWord").val();
    var type = $("#loginTeacher").val();
    var srt = {
        mobile: mobile,
        pass_word: passWord,
        type: type
    };
    $.post("http://localhost:8080/grade-manager/user/sign_in", srt, function (data) {
        if (!!data) {
            if (!!data.code && data.code == 1) {

            }
        }
        alert(data.code)
        alert(data.data.name)
        console.log(data);
    })
});

