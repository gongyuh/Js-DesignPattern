class LoginForm {
    constructor () {
        this.state = 'hide'
    }
    show () {
        if(this.state === 'show') {
            console.log('显示')
            return
        }
        this.state = 'show'
        console.log('已经显示')
    }
    hide () {
        if(this.state === 'hide') {
            console.log('隐藏')
            return
        }
        this.state = 'hide'
        console.log('已经隐藏')
    }
}

LoginForm.getInstance = (function () {
    let instance
    return function () {
        if(!instance) {
            instance = new LoginForm()
        }
        return instance
    }
})()

//测试:一个登录框只会显示一次，不然就会出错;两个同时显示，打印出来的是一个是显示，一个是已经显示
let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.hide()

console.log(login1 === login2) //true

