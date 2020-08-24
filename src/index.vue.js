import Vue from './vue.js'
export function print() {
    return 'vue function';
}
var app = new Vue({
    el: '#NODEENV',
    data: {
        message: process.env.NODE_ENV
    }
})