// console.log("Testing");

const posts = [
  {
    title: "Post one",
    sub: "This is the first Post",
  },
  {
    title: "Post Two",
    sub: "This is the second Post",
  },
  {
    title: "Post Third",
    sub: "This is the Last Post",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = " ";
    posts.forEach((post) => {
      output += `<li> Post title is ${post.title} and description is ${post.sub}</li>`;
      console.log(output);
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callBack) {
  setTimeout(() => {
    posts.push(post);
    callBack();
  }, 2000);
}

createPost({ title: "Post Four", sub: "This is the final post" }, getPosts);
