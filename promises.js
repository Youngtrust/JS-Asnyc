const posts = [
    {title:'post n', body:'This is post one'},
    {title:'post n', body:'This is post 2'}
];


function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += '<li>${post.title}</li>';
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            //const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error: Something went wrong');
            }
        },2000);
    });
}
// createPost({title:'post n', body:'This is post 3'})
//     .then(getPosts)
//     .catch(err => console.log(err));

//promise.all
// const promise1 = promise.resolve('hello world');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//     setTimeout(resolve, 2000, 'Bye')
// );

// Promise.all([promise1, promise2, promise3])
//     .then(values => console.log(values));



// Async / Await
// async function init() {
//   await createPost({ title: 'Post Three', body: 'This is post three' });

//   getPosts();
// }

// Asunc / Await / Fetch
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
    const data = await res.json();
  
    console.log(data);
  }
  
  fetchUsers();
