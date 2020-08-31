import Vue from './vue.js'
import velocity from './velocity.min.js'

export default function print() {
    return 'vue function';
}

new Vue({
    el: '#demoguodudonghuatab',
    data: {
        show: true,
        isEditing: false,
        view: ''
    },
    methods: {
        isview: function() {
            console.log(this.view = this.view == 'v-a' ? 'v-b' : 'v-a')
        },
        beforeEnter: function(el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
        },
        enter: function(el, done) {
            Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '1em' }, { complete: done })
        },
        leave: function(el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        }
    },
    components: {
        'v-a': {
            template: '<div>Component A</div>'
        },
        'v-b': {
            template: '<div>Component B</div>'
        }
    }
})

new Vue({
    el: '#demoguodudonghuatablistdemo',
    data: {
        items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        nextNum: 10
    },
    methods: {
        randomIndex: function() {
            return Math.floor(Math.random() * this.items.length)
        },
        add: function() {
            this.items.splice(this.randomIndex(), 0, this.nextNum++)
        },
        remove: function() {
            this.items.splice(this.randomIndex(), 1)
        },
        shuffle: function() {
            this.items = _.shuffle(this.items)
        }
    }
})