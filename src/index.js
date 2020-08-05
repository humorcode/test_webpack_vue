import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
import printMe from './print.js';

function component() {
    //--------------------------------
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', '哈哈'], ', ,');
    element.classList.add('hello');
    //--------------------------------
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    console.log(Data);
    //--------------------------------
    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
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