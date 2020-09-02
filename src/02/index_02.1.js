import Vue from './../vue.js'
export default function print() {
    return 'vue function';
}

//4.过滤器===
Vue.filter('capitalize', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})
new Vue({
    data: {
        items: ['a', 'b', 'c']
    },
    filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})