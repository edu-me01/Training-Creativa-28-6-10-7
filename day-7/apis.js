fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

  fetch('https://jsonplaceholder.typicode.com/photos?_limit=5')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

async function fetchPosts(theAPISource) {
  try {
    const response = await fetch(theAPISource);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
fetchPosts('https://jsonplaceholder.typicode.com/posts?_limit=5');


var arrowPosts = async (theAPISource) => {
  try {
    const response = await fetch(theAPISource);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}
arrowPosts('https://jsonplaceholder.typicode.com/posts?_limit=5');


async function getUser(ID) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${ID}`);
    const user = await response.json();
    console.log(user.name);
  } catch (error) {
    console.error('Error:', error);
  }
}

getUser(1);
