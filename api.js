
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => loadPosts(posts))




function loadPosts(posts) {
  let postContainer = document.getElementById('post-container');
  
  for(let post of posts){
    let everyPost = document.createElement('div');
    everyPost.innerHTML = `<h3> ${post.title}</h3>
    <p>${post.body}</p>`;
    postContainer.appendChild(everyPost);
    everyPost.style.textAlign = 'center';
    everyPost.style.border = '2px solid black';
    everyPost.style.margin = '5px';
    everyPost.classList.add('every-post');
    console.log(post.body);
    console.log(post.title);
  }
  
}



