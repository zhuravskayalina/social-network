import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, updateNewPostText, subscribe} from "./redux/state";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById('root'));

export function rerenderEntireTree(state) {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>
    );
};
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

reportWebVitals();
