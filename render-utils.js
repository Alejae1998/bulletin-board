export function renderPosts(post) {
    const div = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');

    div.classList.add('bulletin-post');

    h2.textContent = post.title;
    p.textContent = post.description;
    h3.textContent = post.name;

    div.append(h2, p, h3);

    return div;
}
