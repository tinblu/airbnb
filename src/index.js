import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./assets/css/index.less"
/* 
  craco设置别名 因找文件（../）比较麻烦
  @ => src:webpack
  问题:react脚手架隐藏webpack
  解决一：npm run eject 不推荐使用
  解决二：craco => creact-react-app config
    安装 npm install @craco/craco@alpha -D(开发阶段区)


*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

