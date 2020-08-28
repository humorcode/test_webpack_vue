import Vue from './vue.js'
export default function print() {
    return 'vue function';
}

Vue.component("my-inline-template", { template: `<p>
<slot>默认-内联模板</slot>
</p>` });
Vue.component('my-x-template', {
    template: '#hello-world-template'
})
new Vue({
    el: "#mobandingyitab",
    data: {}
});