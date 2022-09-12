let rerenderEntireTree = () => console.log('state was changed')

const state = {
    profilePage: {
        postsData: [
            {id: 1, text: 'My first post!', likesCount: 7},
            {id: 2, text: 'Oops i did it again!', likesCount: 9}
        ],
        newPostText: 'hi lola'
    },
    messagesPage: {
        messagesData: [
            {id: 1, name: "Channing Tatum"},
            {id: 2, name: "Timothee Chalamet"},
            {id: 3, name: "Florence Pugh"},
            {id: 4, name: "Lindsay Lohan"},
            {id: 5, name: "Madonna"},
            {id: 6, name: "Joe Biden"},
            {id: 7, name: "Zoe Kravitz"},
            {id: 8, name: "Zhenya Ranetka"},
            {id: 9, name: "Joe Campbell Bower"},
        ],
        messagesTextData: [
            {id: 1, text: 'hi how is it going'},
            {id: 1, text: 'did ya know michael jackson is alive'},
            {id: 2, text: 'fine..'},
            {id: 2, text: 'frankly i knew it'},
        ]
    }
};

export function addPost () {

    const newPost = {
        id: 5,
        text: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.postsData.unshift(newPost);
    state.profilePage.newPostText = '';
    updateNewPostText('');
    rerenderEntireTree(state);
};

export function updateNewPostText (text) {
    state.profilePage.newPostText = text;
    rerenderEntireTree(state);
};


export function subscribe(observer) { //observer
    rerenderEntireTree = observer;
};


export default state;