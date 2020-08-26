import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import { cube } from './math.js';

// alert("环境:" + process.env.NODE_ENV);

function component() {
    //--------------------------------
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', '哈哈'], ', ,');
    element.classList.add('hello');
    //--------------------------------
    var element2 = document.createElement('pre');
    element2.innerHTML = [
        'Hello webpack!',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    element.appendChild(element2);
    //--------------------------------
    //--------------------------------
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    //--------------------------------
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = e =>
        import ('./print.js').then(p => {
            var print = p.default;
            print();
        });
    element.appendChild(btn);
    //--------------------------------
    return element;
}
// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);


if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}


//基础组件------------------------------------------------
import indexvue from './index.vue.js'
indexvue.print

//深入组件------------------------------------------------
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

// const requireComponent = require.context(
//     // 其组件目录的相对路径
//     './components',
//     // 是否查询其子目录
//     false,
//     // 匹配基础组件文件名的正则表达式
//     /Base[A-Z]\w+\.(vue|js)$/
// )
// console.log(requireComponent)

// requireComponent.keys().forEach(fileName => {
//     // 获取组件配置
//     const componentConfig = requireComponent(fileName)
//         // 获取组件的 PascalCase 命名
//     const componentName = upperFirst(
//         camelCase(
//             // 获取和目录深度无关的文件名
//             fileName
//             .split('/')
//             .pop()
//             .replace(/\.\w+$/, '')
//         )
//     )

//     // 全局注册组件
//     Vue.component(
//         componentName,
//         // 如果这个组件选项是通过 `export default` 导出的，
//         // 那么就会优先使用 `.default`，
//         // 否则回退到使用模块的根。
//         componentConfig.default || componentConfig
//     )
// })

// import vuemodel from './components/vue.model.js'
// vuemodel.print

//------------------------------------------------