window.onload = function() {
    // 绑定 myus 
    myspelt = document.getElementById("myspan")
    pwd = document.getElementById("pwdsp")
    var myuselt = document.getElementById("myus")
        // 失去焦点 myusbl 绑定blur事件
    myuselt.onblur = function() {
            // 失去焦点验证
            // 获取用户名
            var username = myuselt.value
                // 去掉前后空白 trim()方法
            username = username.trim()
                // 若不合法写入span
            if (username == "") {
                // 绑定myspan
                myspelt.innerHTML = "用户名不能为空"
            } else {
                // 用户名不为空 验证长度是否为6-12位之间
                if (username.length < 6 | username.length > 12) {

                    myspelt.innerHTML = "用户名长度必须为6-12位之间"
                } else {
                    // 验证是否有特殊字符 正则表达式
                    var regExp = /^[a-zA-Z0-9]+$/
                    var ok = regExp.test(username)
                    if (ok) {
                        // 合法
                        myspelt.innerHTML = ""
                    } else {
                        // 不合法
                        myspelt.innerHTML = "用户名只能有数字和字母组成"

                    }
                }
            }
        }
        // 获得焦点：清空span的错误信息
    myuselt.onfocus = function() {
        myspelt.innerHTML = ""
    }

    var yzwd = document.getElementById("cfpwd")
        // 验证密码失去焦点时
    yzwd.onblur = function() {
        // 获取密码value
        mypwd = document.getElementById("uspwd").value
            // 获取确认密码value
        var cfpwdd = yzwd.value
            // 进行比对
        if (mypwd != cfpwdd) {
            pwd.innerHTML = "密码和确认密码不一致"
        } else {
            pwd.innerHTML = ""
        }
    }
    yzwd.onfocus = function() {
        pwd.innerHTML = ""
    }


    document.getElementById("bt").onclick = function() {
        // 点击button开始验证成功将提交
        // 如果验证密码提示信息为空提交表单
        // 重点:使用JS代码怎么触发事件？？？？？
        myuselt.focus() // 触发文本框的获取焦点事件
        myuselt.blur() // 触发文本框的失去焦点事件
            // 验证密码，怎么验证密码？让确认密码失去焦点
        yzwd.focus()
        yzwd.blur()
            // 当所有的span都是空的 密码不为空表单合法 sumbit方法提交
        if (myspelt.innerHTML == "" && pwd.innerHTML == "" && mypwd != "") {
            // form对象submit方法直接提交表单
            document.getElementById("userform").submit()
        }
    }
    document.getElementById("mybd").onkeydown = function(x) { //x代表的是一个keydown事件对象

        // keycode获取键值 
        // 记住：键盘上回车键的键值永远都是13.ESC键的键值永远都是27.
        if (x.keycode == 13) {
            console.log('登录，正在进行身份认证，请稍后...')
            myuselt.focus() // 触发文本框的获取焦点事件
            myuselt.blur() // 触发文本框的失去焦点事件
                // 验证密码，怎么验证密码？让确认密码失去焦点
            yzwd.focus()
            yzwd.blur()
                // 当所有的span都是空的 密码不为空表单合法 sumbit方法提交
            if (myspelt.innerHTML == "" && pwd.innerHTML == "" && mypwd != "") {
                // form对象submit方法直接提交表单
                document.getElementById("userform").submit()
            }
        } else if (x.keycode == 27) {

            console.log("系统安全退出了！")
        }
    }
}