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

new Vue({
    el: "#sudoku_guodudonghuatab",
    data: {
        cells: Array.apply(null, { length: 81 }).map(function(_, index) {
            return {
                id: index,
                number: (index % 9) + 1
            };
        })
    },
    methods: {
        shuffle: function() {
            this.cells = _.shuffle(this.cells);
        }
    }
});
//--------------------------------------------------------
Vue.component('my_staggered_list_demo_transition', {
    template: '\
    <transition-group name="staggered-fade" tag="ul" v-bind:css="false" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave">\
        <slot></slot>\
    </transition-group>',
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0
            el.style.height = 0
        },
        enter: function(el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function() {
                Velocity(
                    el, { opacity: 1, height: '1.6em' }, { complete: done }
                )
            }, delay)
        },
        leave: function(el, done) {
            var delay = el.dataset.index * 150
            setTimeout(function() {
                Velocity(
                    el, { opacity: 0, height: 0 }, { complete: done }
                )
            }, delay)
        }
    }
})
new Vue({
        el: '#guodudonghuatab_staggered_list_demo',
        data: {
            query: '',
            list: [
                { msg: '可复用的过渡组件' },
                { msg: 'Bruce Lee' },
                { msg: 'Jackie Chan' },
                { msg: 'Chuck Norris' },
                { msg: 'Jet Li' },
                { msg: 'Kung Fury' }
            ]
        },
        computed: {
            computedList: function() {
                var vm = this
                return this.list.filter(function(item) {
                    return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
                })
            }
        }
    })
    //动态过渡--------------------------------------------------------
new Vue({
        el: '#guodudonghuatab_dynamic_fade_demo',
        data: {
            show: true,
            fadeInDuration: 1000,
            fadeOutDuration: 1000,
            maxFadeDuration: 1500,
            stop: true
        },
        mounted: function() {
            this.show = false
        },
        methods: {
            beforeEnter: function(el) {
                el.style.opacity = 0
            },
            enter: function(el, done) {
                var vm = this
                Velocity(el, { opacity: 1 }, {
                    duration: this.fadeInDuration,
                    complete: function() {
                        done()
                        if (!vm.stop) vm.show = false
                    }
                })
            },
            leave: function(el, done) {
                var vm = this
                Velocity(el, { opacity: 0 }, {
                    duration: this.fadeOutDuration,
                    complete: function() {
                        done()
                        vm.show = true
                    }
                })
            }
        }
    })
    ///状态动画与侦听器---------------------------------------
import gsap from './gsap.min.js'
new Vue({
    el: '#guodudonghuatab_animated-number-demo',
    data: {
        number: 0,
        tweenedNumber: 0
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number: function(newValue) {
            gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
        }
    }
})

//把过渡放到组件里--------------------------------------------
// 这种复杂的补间动画逻辑可以被复用
// 任何整数都可以执行动画
// 组件化使我们的界面十分清晰
// 可以支持更多更复杂的动态过渡
// 策略。
import TWEEN from './tween.js@16.3.4'
Vue.component('animated-integer', {
        template: '<span>{{ tweeningValue }}</span>',
        props: {
            value: {
                type: Number,
                required: true
            }
        },
        data: function() {
            return {
                tweeningValue: 0
            }
        },
        watch: {
            value: function(newValue, oldValue) {
                this.tween(oldValue, newValue)
            }
        },
        mounted: function() {
            this.tween(0, this.value)
        },
        methods: {
            tween: function(startValue, endValue) {
                var vm = this

                function animate() {
                    if (TWEEN.update()) {
                        requestAnimationFrame(animate)
                    }
                }
                new TWEEN.Tween({ tweeningValue: startValue })
                    .to({ tweeningValue: endValue }, 500)
                    .onUpdate(function() {
                        vm.tweeningValue = this.tweeningValue.toFixed(0)
                    })
                    .start()
                animate()
            }
        }
    })
    // 所有的复杂度都已经从 Vue 的主实例中移除！
new Vue({
    el: '#guodudonghuatab_example-8',
    data: {
        firstNumber: 20,
        secondNumber: 40
    },
    computed: {
        result: function() {
            return this.firstNumber + this.secondNumber
        }
    }
})