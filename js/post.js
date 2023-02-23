function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

/*
* 1. Get the container element where you want to add the new elements
* 2. Create child element
* 3. Set innerText or innerHTML
* 4. appendChild
* 5.

*/


function displayPost(posts){
    const postsContainer = document.getElementById('posts-container');
    for(const post of posts){
       const div = document.createElement('div');
       div.classList.add('post')
       div.innerHTML = `
       <h4>User-${post.userId}</h4>
       <h5>Post: ${post.title}</h5>
       <p>Post Description: ${post.body}</p>
       `;
       postsContainer.appendChild(div);
    }
}


loadPost();