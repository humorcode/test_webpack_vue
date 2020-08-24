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



import indexvue from './index.vue.js'
indexvue.print