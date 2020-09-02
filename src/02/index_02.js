import Vue from './../vue.js'
//混入----------------------------------------------
var mixin = {
    data: function() { return { message: 'hello', foo: "abc" } },
    created: function() { console.log('混入对象的钩子被调用') },
    methods: {
        conflicting: function() { console.log('from 混入') }
    }
}
var mixin = new Vue({
    mixins: [mixin],
    data: function() { return { message: 'goodbye', bar: 'def' } },
    created: function() {
        console.log('组件钩子被调用', this.$data) // => { message: "goodbye", foo: "abc", bar: "def" }
    },
    methods: {
        conflicting: function() { console.log('from 自己, 对象键名冲突时，取组件对象值') }
    }
})
mixin.conflicting();
//-----------------------------------------
Vue.mixin({
    created: function() {
        var myOption = this.$options.myOption
        console.log('全局混入', myOption)
    }
})
new Vue({ myOption: 'hello!' });
//自定义选项合并策略======================================
var strategies = Vue.config.optionMergeStrategies
strategies.myOption = strategies.methods
Vue.config.optionMergeStrategies.myOption = function(toVal, fromVal) {
    // 返回合并后的值
};

// 注册一个全局自定义指令 `v-focus`
// Vue.directive('focus', {
//     // 当被绑定的元素插入到 DOM 中时……
//     inserted: function(el) {
//         // 聚焦元素
//         el.focus()
//     }
// })
new Vue({
    el: '#zidingyizhilingtag_msg',
    data: { msg: '自定义指令 v-focus' },
    directives: {
        focus: { inserted: function(el) { el.focus() } }
    }
});
//钩子函数参数---------------------------
Vue.directive('demo', {
    bind: function(el, binding, vnode, oldVnode) {
        var s = JSON.stringify
        el.innerHTML =
            'name: ' + s(binding.name) + '<br>' +
            'value: ' + s(binding.value) + '<br>' +
            'expression: ' + s(binding.expression) + '<br>' +
            'argument: ' + s(binding.arg) + '<br>' +
            'modifiers: ' + s(binding.modifiers) + '<br>' +
            'vnode keys: ' + Object.keys(vnode).join(', ')
    }
})
new Vue({
    el: '#zidingyizhilingtag_hook_arg',
    data: { message: '自定义指令-钩子函数参数!' }
});
//动态指令参数--------------------------
Vue.directive('pin', {
    bind: function(el, binding, vnode) {
        el.style.position = 'fixed'
        var s = (binding.arg == 'left' ? 'left' : 'top')
        el.style[s] = binding.value + 'px'
        el.style.background = 'rgba(0, 255, 200, 0.9)'
    }
})
new Vue({ el: '#zidingyizhilingtag_d_hook_arg', data: { direction: 'top' } });
//动态指令参数--对象字面量--------------------------
Vue.directive('demo_zimian', function(el, binding) {
    console.log(binding.value.color) // => "white"
    console.log(binding.value.text) // => "hello!"
})
new Vue({ el: '#zidingyizhilingtag_d_hook_var' });








//================================

import index_020 from './index_02.0.js'
console.log(index_020.print);