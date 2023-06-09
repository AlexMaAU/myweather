import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//添加好tailwind的css需要导入才可以使得Tailwind CSS生效
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

