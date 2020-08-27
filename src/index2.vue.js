import Vue from './vue.js'
export default function print() {
    return 'vue function';
}

Vue.component('base-layout', {
    props: ['userobj', 'filteredTodos'],
    template: `
        <div class="container">
            <header>
                <slot name="header" v-bind:user="userobj">后备内容>我是头slot{{userobj}}</slot>
            </header>
            <main>
                <slot>后备内容>我是默认slot</slot>
            </main>
            <footer>
                <slot name="footer" v-bind:user="userobj">后备内容>我是尾slot</slot>
            </footer>
                <ul>
                    <li v-for="todo in filteredTodos" v-bind:key="todo.id">
                        <!--我们为每个 todo 准备了一个插槽，将 todo 对象作为一个插槽的 prop 传入。-->
                        <slot name="todo" v-bind:todo="todo">
                        <!-- 后备内容 -->
                        后备内容>{{ todo.text }}
                        </slot>
                    </li>
                </ul>
        </div>`
})
var shenruzujian = new Vue({
    el: '#shenruzujian',
    data: {
        userobj: { id: 1, username: 'user123' },
        filteredTodos: [
            { id: 'todo1', text: 'todo_01_t' },
            { id: 'todo2', text: 'todo_02_t' }
        ]
    }
})