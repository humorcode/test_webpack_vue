import Vue from './vue.js'
export default function print() {
    return 'vue function';
}

Vue.component('base-layout', {
    props: ['user'],
    template: `
        <div class="container">
            <header>
                <slot name="header">我是头slot{{user}}</slot>
            </header>
            <main>
                <slot>我是默认slot</slot>
            </main>
            <footer>
                <slot name="footer">我是尾slot</slot>
            </footer>
        </div>`
})
var shenruzujian = new Vue({
    el: '#shenruzujian',
    data: { user: { id: 1, username: 'user123' } }
})