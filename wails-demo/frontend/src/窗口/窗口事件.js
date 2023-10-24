import * as goFc from "../../wailsjs/go/main/App";
import {ElMessage, ElMessageBox} from "element-plus";

export function 绑定窗口事件(c, 组件) {
    const 程序集变量 = {
        time: null
    }
    c.按钮2被单击 = function () {
        console.log("按钮2被单击")
        组件.编辑框1.内容 = "祖国你好!"
    }

    c.按钮_获取时间被单击 = async () => {
        console.log("按钮_获取时间被单击")
        //js
        //组件.编辑框_时间.内容 = new Date().toLocaleString()
        //go
        组件.编辑框_时间.内容 = await goFc.E获取系统时间()

        clearInterval(程序集变量.time)
        程序集变量.time = setInterval(async () => {
            (
                组件.编辑框_时间.内容 = await goFc.E获取系统时间()
            )
        }, 1000)

    }

    c.自定义组件1自定义事件 = function (name, data) {
        console.log("自定义组件1自定义事件", "事件名称", name, "数据", data)
        if (name === "forgotPassword") {
            ElMessageBox.alert(
                `忘记密码`,
                '提示',
                {
                    confirmButtonText: '确定',
                    callback: (action) => {
                        ElMessage({
                            type: 'info',
                            title: "提示",
                            message: `点击了确定: ${action}`,
                        });

                        ElMessage({
                            message: '忘记密码',
                            type: 'success',
                        });
                    }
                })

        }
        if (name === 'login') {
            let u = 组件.自定义组件1.data.username
            let p = 组件.自定义组件1.data.password
            // u = data.username // 也可以这样子 取决于自定义组件返回的data
            // p = data.password
            console.log("u", u)
            console.log("p", p)

            ElMessageBox.alert(
                `登录成功 你输入的账号密码为${u} ${p}`,
                '提示',
                {
                    confirmButtonText: '确定',
                    callback: (action) => {
                        ElMessage({
                            type: 'info',
                            title: "提示",
                            message: `点击了确定: ${action}`,
                        });

                        ElMessage({
                            message: '登录成功',
                            type: 'success',
                        });
                    }
                })

        }
    }
//事件函数位置不要删除
}