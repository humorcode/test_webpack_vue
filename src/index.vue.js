import Vue from './vue.js'
export default function print() {
    return 'vue function';
}
var app = new Vue({
    el: '#NODEENV',
    data: {
        message: process.env.NODE_ENV
    }
})

var example1 = new Vue({
    el: '#example-1',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ],
        object: {
            title: 'How to do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        },
        sets: [
            [1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10]
        ],
        todos: [{
            isComplete: false,
            todoname: 'a'
        }]
    },
    methods: {
        even: function(numbers) {
            return numbers.filter(function(number) {
                return number % 2 === 0
            })
        }
    }
})

Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }} = {{ id }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title', 'id']
})
new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [{
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function() {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

var example10 = new Vue({
    el: '#example-10',
    data: {
        counter: 0
    },
    methods: {
        greet: function(event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.counter + '!')
                // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function(message) {
            alert(message)
        },
        warn: function(message, event) {
            // 现在我们可以访问原生事件对象
            if (event) {
                event.preventDefault()
            }
            alert(message)
        },
        submit: function(event) {
            console.log(event)
        }
    }
})
var example11 = new Vue({
    el: '#example11',
    data: {
        message: '',
        age: 0,
        checkedNames: [],
        picked: '',
        selected: [],
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ],
        toggle: 'yes'
    }
})

//基础组件--------------------------------------------------------------
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
    `
})
Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
})
Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
})
new Vue({
        el: '#example20',
        data: {
            postFontSize: 1,
            posts: [
                { id: 1, title: 'My', content: 'journey with Vue' },
                { id: 2, title: 'Blog', content: 'ging with Vue' },
                { id: 3, title: 'Why', content: 'Vue is so fun' }
            ],
            searchText: ''
        },
        methods: {
            onEnlargeText: function(enlargeAmount) {
                this.postFontSize += enlargeAmount
            }
        }
    })
    //动态组件=================================================================
var tabhome = { template: "<div><slot></slot>Home componentA</div>" }
var tabposts = { template: "<div><slot></slot>Home componentB<tabhome></tabhome></div>", components: { tabhome } }
var tabarchive = { template: "<div><slot></slot>Home componentC</div>" }
var blogpostrow = {
    template: "<tr>{{tit}}<slot></slot></tr>",
    props: ['title'],
    data: function() {
        return {
            tit: this.title.split('').reverse().join('')
        }
    }
}
Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
    <div><input id='abc'
    type="checkbox"
    v-bind:checked="checked"
    v-on:change="$emit('change', $event.target.checked)"
  ></input><label for="abc"><slot></slot></label></div>
`
})
Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        inputListeners: function() {
            var vm = this
                // `Object.assign` 将所有的对象合并为一个新对象
            return Object.assign({},
                // 我们从父级添加所有的监听器
                this.$listeners,
                // 然后我们添加自定义监听器，
                // 或覆写一些监听器的行为
                {
                    // 这里确保组件配合 `v-model` 的工作
                    input: function(event) {
                        vm.$emit('input', event.target.value)
                    }
                }
            )
        }
    },
    template: `
      <label>
        {{ label }}
        <input
          v-bind="$attrs"
          v-bind:value="value"
          v-on="inputListeners"
        >
      </label>
    `
})
new Vue({
    el: "#example_component",
    data: {
        currentTab: "Home",
        tabs: ["Home", "Posts", "Archive"],
        post: {
            id: 1,
            title: '自动对象的所有 property'
        },
        basecheckbox: true
    },
    components: {
        'tab-home': tabhome,
        'tab-posts': tabposts,
        'tab-archive': tabarchive,
        'blog-post-row': blogpostrow
    },
    computed: {
        currentTabComponent: function() {
            return "tab-" + this.currentTab.toLowerCase();
        }
    },
    methods: {
        onFocus: function(e) {
            console.log(e)
        }
    }
});
//=================================================================
//=================================================================
//=================================================================
//=================================================================