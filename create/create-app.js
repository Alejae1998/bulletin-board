// import
import { createPost, checkAuth, logout } from '../fetch-utils.js';
// authentication check
checkAuth();
// dom

const form = document.getElementById('new-post');

// events

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const newPost = {
        title: data.get('title'),
        description: data.get('description'),
        name: data.get('name'),
    };
    const response = await createPost(newPost);
    console.log(response);
    location.replace('/');
});

const home = document.getElementById('home');
home.addEventListener('click', () => {
    location.replace('/');
});

const logutBtn = document.getElementById('logout');
logutBtn.addEventListener('click', () => {
    logout();
});
