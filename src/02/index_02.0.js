import Vue from './../vue.js'
export default function print() {
    return 'vue function';
}

Vue.component('anchored_heading_chuantong', {
    props: { level: { type: Number, required: true } },
    template: `
            <h1 v-if="level === 1"><slot></slot></h1>
            <h2 v-else-if="level === 2"><slot></slot></h2>
            <h3 v-else-if="level === 3"><slot></slot></h3>
            <h4 v-else-if="level === 4"><slot></slot></h4>
            <h5 v-else-if="level === 5"><slot></slot></h5>
            <h6 v-else-if="level === 6"><slot></slot></h6>
    `
})
Vue.component('anchored_heading_xunran', {
    render: function(createElement) {
        return createElement('h' + this.level // 标签名称
            , this.$slots.default // 子节点数组
        )
    },
    props: { level: { type: Number, required: true } },
})
new Vue({
    el: '#zidingyixuanranhanshu_tag_chuantong'
});
//完整示例----------------------------------------------
var getChildrenTextContent = function(children) {
    return children.map(function(node) {
        return node.children ?
            getChildrenTextContent(node.children) :
            node.text
    }).join('')
}
Vue.component('anchored_heading_xunran_full', {
    render: function(createElement) {
        console.log(getChildrenTextContent(this.$slots.default))
            // 创建 kebab-case 风格的 ID
        var headingId = getChildrenTextContent(this.$slots.default)
            .toLowerCase()
            .replace(/\W+/g, '-')
            .replace(/(^-|-$)/g, '')
        return createElement(
            'h' + this.level, [
                createElement('a', {
                    attrs: {
                        name: headingId,
                        href: '#' + headingId
                    }
                }, this.$slots.default)
            ]
        )
    },
    props: {
        level: {
            type: Number,
            required: true
        }
    }
})
new Vue({
    el: '#anchored_heading_xunran_full_id'
});
//工厂函数渲染--------------------
Vue.component('anchored_heading_xunran_full01', {
    render: function(createElement) {
        return createElement('div',
            Array.apply(null, { length: 3 }).map(function() {
                return createElement('p', '工厂函数渲染')
            })
        )
    }
})
new Vue({
    el: '#anchored_heading_xunran_full_id01'
});
//使用 JavaScript 代替模板功能--------------------
Vue.component('anchored_heading_xunran_full02', {
    props: ['items'],
    render: function(createElement) {
        if (this.items.length) {
            return createElement('ul', this.items.map(function(item) {
                return createElement('li', item.name)
            }))
        } else {
            return createElement('p', 'No items found.')
        }
    }
})
new Vue({
    el: '#anchored_heading_xunran_full_id02',
    data: { items: [{ name: 'name-a' }, { name: 'name-b' }] }
});
//使用 JavaScript 代替模板功能--------------------
Vue.component('anchored_heading_xunran_full03', {
    model: {
        prop: 'value',
        event: 'inputmethod'
    },
    props: ['value'],
    render: function(createElement) {
        var self = this
        return createElement('input', {
            domProps: {
                value: self.value
            },
            on: {
                input: function(event) {
                    self.$emit('inputmethod', event.target.value)
                }
            }
        })
    }
})
new Vue({
    el: '#anchored_heading_xunran_full_id03',
    data: { msg: '这就是深入底层的代价，但与 v-model 相比，这可以让你更好地控制交互细节。' }
});