import Vue from './vue.js'
export default function print() {
    return 'vue function';
}

Vue.component("google-map", {
    provide: function() { return { getMapParent: this.getMap }; }, //提供给子组件访问
    data: function() { return { map: { name: '我是googlemap.' } }; },
    methods: {
        getMap: function(found) {
            console.log('google-map=>' + found + '<=');
            found(this.map);
        }
    },
    template: '<div style ="width: 300px; height: 100px; background-color: yellowgreen;">父组件<slot></slot></div>'
});
Vue.component("google-map-marker", {
    inject: ["getMapParent"],
    props: ["places"],
    created: function() {
        this.getMapParent(function(abc) {
            console.log(abc.name);
        });
    },
    template: '<div style ="width: 100px; height: 50px; background-color: royalblue;">子组件</div>'
});
new Vue({
    el: "#yilaizhuru"
});