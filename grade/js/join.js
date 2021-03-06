var Script = function () {
    var http = "http://juline-pv.com";
    var reMobile = /^1[0-9]{10}/;
    $('#btn-join-class').on('click', function () {
        var classNO = $('#classNO').val();
        var mobile = $('#mobile').val();
        var studentNO = $('#studentNO').val();
        var studentName = $('#studentName').val();
        if (classNO == "") {
            $.gritter.add({
                title: '警告!',
                text: '请填写姓名！',
                sticky: false,
                time: ''
            });
            return false;
        }
        if (mobile == "" || !reMobile.test(mobile)) {
            $.gritter.add({
                title: '警告!',
                text: '请填写正确的手机号！',
                sticky: false,
                time: ''
            });
            return false;
        }
        if (studentNO == "" || !reMobile.test(studentNO)) {
            $.gritter.add({
                title: '警告!',
                text: '请填写正确的学号！',
                sticky: false,
                time: ''
            });
            return false;
        }
        if (studentName == "") {
            $.gritter.add({
                title: '警告!',
                text: '请填写姓名！',
                sticky: false,
                time: ''
            });
            return false;
        }
        $('#form-join-class').submit();
    });

    $('#mobile').focus(function () {
        $.gritter.add({
            title: '警告!',
            text: '请确保手机号，更多功能需要手机号！',
            sticky: false,
            time: '2'
        });
    });
    $('#studentNO').focus(function () {
        $.gritter.add({
            title: '警告!',
            text: '请确保学号和姓名正确！',
            sticky: false,
            time: '2'
        });
    });
    $('#studentName').focus(function () {
        $.gritter.add({
            title: '警告!',
            text: '请确保学号和姓名正确！',
            sticky: false,
            time: '2'
        });
    });
    $('#code').blur(function () {
        var mobile = $('#mobile').val();
        var code = $('#code').val();
        if (code == "") {
            $.gritter.add({
                title: '警告!',
                text: '请填写验证码！',
                sticky: false,
                time: ''
            });
            return false;
        }
        var srt = {
            mobile: mobile,
            code: code
        }
        $.post(http + "/sms/verify", srt, function (data) {
            if (!!data) {
                if (data.code == "1") {
                    $('#btn-join-class').removeAttr("disabled");
                }
            }
        });
    });
    $('#btn-send').on('click', function () {
        var mobile = $('#mobile').val();
        if (mobile == "" || !reMobile.test(mobile)) {
            $.gritter.add({
                title: '警告!',
                text: '请填写正确的手机号！',
                sticky: false,
                time: ''
            });
            return false;
        }
        var srt = {
            mobile: mobile
        }
        $.post(http + "/sms/send_code", srt, function (data) {
            if (!!data) {
                if (data.code == 1) {
                    $.gritter.add({
                        title: '提示!',
                        text: '发送成功！',
                        sticky: false,
                        time: ''
                    });
                } else {
                    var message = data.message;
                    $.gritter.add({
                        title: '提示!',
                        text: message + "  请联系15757115785解决",
                        sticky: false,
                        time: ''
                    });
                }
            }
            console.log(data);
        });
    });
}();



