import Vue from './vue.js'
export default function print() {
    return 'vue function';
}

Vue.component('async-example', function(resolve, reject) {
    setTimeout(function() {
        // 向 `resolve` 回调传递组件定义
        resolve({ template: '<div>I am async!</div>' })
            // reject("拒绝异步拉取")
    }, 1000)
})

var shenruzujian = new Vue({
    el: '#asynczujian',
    data: {
        userobj: { id: 1, username: 'user123' },
        filteredTodos: [
            { id: 'todo1', text: 'todo_01_t' },
            { id: 'todo2', text: 'todo_02_t' }
        ]
    }
})



// Vue.component('async-webpack-example', function(resolve) {
//     // 这个特殊的 `require` 语法将会告诉 webpack
//     // 自动将你的构建代码切割成多个包，这些包
//     // 会通过 Ajax 请求加载
//     require(['./my-async-component'], resolve)
// })
// Vue.component(
//     'async-webpack-example',
//     // 这个动态导入会返回一个 `Promise` 对象。
//     () => import('./my-async-component')
//   )

//局部注册
// new Vue({
//     // ...
//     components: {
//       'my-component': () => import('./my-async-component')
//     }
//   })