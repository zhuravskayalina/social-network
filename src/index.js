import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const postsData = [
        {id: 1, text: 'My first post!', likesCount: '7b'},
        {id: 2, text: 'Oops i did it again!', likesCount: '8b'},
];

const messagesData = [
        {id: 1, name: "Channing Tatum"},
        {id: 2, name: "Timothee Chalamet"},
        {id: 3, name: "Florence Pugh"},
        {id: 4, name: "Lindsay Lohan"},
        {id: 5, name: "Madonna"},
        {id: 6, name: "Joe Biden"},
        {id: 7, name: "Zoe Kravitz"},
        {id: 8, name: "Zhenya Ranetka"},
        {id: 9, name: "Joe Campbell Bower"},
];

const messagesTextData = [
        {id: 1, text: 'hi how is it going'},
        {id: 1, text: 'did ya know michael jackson is alive'},
        {id: 2, text: 'fine..'},
        {id: 2, text: 'frankly i knew it'},
];

root.render(
  <React.StrictMode>
    <App postsData={postsData} messagesData={messagesData} messagesTextData={messagesTextData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
