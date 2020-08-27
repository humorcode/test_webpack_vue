import Vue from './vue.js'
import Pikaday from './pikaday.js'
export default function print() {
    return 'vue function';
}

new Vue({
    el: "#chengxuhuashijian",
    data: {
        date: null
    },
    mounted: function() {
        console.log('pikaday:mounted');
        this.attachDatepicker('startDateInput')
        this.attachDatepicker('endDateInput')
    },
    methods: {
        attachDatepicker: function(refName) {
            var picker = new Pikaday({
                field: this.$refs[refName],
                format: 'YYYY-MM-DD'
            })

            this.$once('hook:beforeDestroy', function() {
                picker.destroy()
            })
        }
    }
});

//----------------------------------------------------
Vue.component("tree-folder", { props: ['folder'], template: `<p>
<span>{{ folder.name }}</span>
<tree-folder-contents :children="folder.children"/>
</p>` });
Vue.component("tree-folder-contents", { props: ['children'], template: `<ul>
<li v-for="child in children">
  <tree-folder v-if="child.children" :folder="child"/>
  <span v-else>{{ child.name }}</span>
</li>
</ul>` });
new Vue({
    el: "#zujiantreefolder",
    data: {
        foldersssss: [{
                name: 'A',
                children: [
                    { name: 'AA01' },
                    {
                        name: 'AA02',
                        children: [{ name: 'AAA01' }, { name: 'AAA02' }]
                    }
                ]
            },
            { name: 'B' }, { name: 'C' }
        ]
    }
});