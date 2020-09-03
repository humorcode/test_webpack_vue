import Vue from './../vue.js'
export default function print() {
    return 'vue function';
}

//4.过滤器===
Vue.component('zidingyiguolvqi_tag_filter', {
    props: ['msg'],
    render: function(createElement) {
        // `<p><slot :msg02="msg"></slot></p>`
        return createElement('p', [
            this.$scopedSlots.default({
                msg02: this.msg
            })
        ])
    }
})
Vue.filter('filterA', function(value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})
Vue.filter('filterC', function(value, a1, a2) {
    return value + " " + a1 + " " + a2;
})
new Vue({
    el: '#zidingyiguolvqi_tag_filter_id',
    data: {
        msg01: 'text,abc'
    },
    filters: {
        filterB: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.slice(0, -1) + value.slice(-1).toUpperCase()
        }
    }
})