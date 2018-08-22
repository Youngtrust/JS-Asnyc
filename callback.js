const posts = [
    {title:'post n', body:'This is post one'},
    {title:'post n', body:'This is post 2'}
];


// function getPost(){
//     setTimeout(()=>{
//         let output = '';
//         posts.forEach((post, index)=>{
//             output += '<li>${post.title}</li>';
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createPost(post){
//     setTimeout(()=>{
//         posts.push(post);
//     },2000);
// }

// getPost();
// createPost({title:'post n', body:'This is post 3'});
//this will not output post 3 because it takes 2s > 1s than get post

function getPost(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += '<li>${post.title}</li>';
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000);
}


createPost({title:'post n', body:'This is post 3'}, getPosts);
//waited 2s and show all posts
//it has to wait to create the post before it actually called
//the call back