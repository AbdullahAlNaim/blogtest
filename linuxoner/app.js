const inputBox = document.querySelector('textarea');
const post = document.querySelector('button');
const history = document.querySelector('ul');

post.addEventListener('click', ()=>{
    console.log(inputBox.text)
})