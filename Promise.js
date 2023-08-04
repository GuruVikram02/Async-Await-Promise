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
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Err: Something went wrong");
      }
    }, 2000);
  });
}
// ---------------This Demonstartes the Promise and its .all property-------------------
// const pr1 = Promise.resolve("Hello World");
// const pr2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "Bieeeeeeee");
// });
// const pr3 = "Vikram";
// Promise.all([pr1, pr2, pr3]).then((values) => console.log(values));

//Async with await
async function init() {
  await createPost({ title: "Post Four", sub: "This is the final post" });

  getPosts();
}
//async with fetch api
async function fetchUsers() {
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const res = await users.json();

  console.log(res);
}
