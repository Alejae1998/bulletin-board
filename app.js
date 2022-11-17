/* Imports */
import { getUser, fetchPosts, logout } from './fetch-utils.js';
import { renderPosts } from './render-utils.js';
/* Get DOM Elements */

const createBtn = document.getElementById('create');
const loginBtn = document.getElementById('auth-btn');
const bulletin = document.getElementById('bulletin-board');

window.addEventListener('load', async () => {
    const user = await getUser();
    if (user) {
        loginBtn.addEventListener('click', logout);
        loginBtn.textContent = 'logout';
    } else {
        loginBtn.addEventListener('click', () => {
            location.replace('./auth-page');
        });
        loginBtn.textContent = 'login';
    }
    createBtn.addEventListener('click', () => {
        location.replace('/create');
    });
    const posts = await fetchPosts();
    for (let post of posts) {
        const postDiv = renderPosts(post);
        bulletin.append(postDiv);
    }
});
