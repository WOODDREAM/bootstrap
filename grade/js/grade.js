var type;
$(".loginTeacher").on('click', function(){
    type = $(".loginTeacher").attr("value");
    alert(type+"---")
});
$('#login').on('click', function () {
    var mobile = $("#loginMobile").val();
    var passWord=$("#loginPassWord").val();

    var srt = {
        mobile: mobile,
        pass_word: passWord,
        type: type
    };
    $.get("http://juline-pv.com/user/sign_in",srt,function(data){
        console.log(data);
    });
});

