const postlistcontainer = document.querySelector('.post-list-container');

//fetch using xhr
function fetchusingXHR(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
    xhr.responseType = 'json';
    xhr.send();

    xhr.onload = function(){
        if(xhr.status === 200){
            displayResult(xhr.response);
        }else{
            console.log('Error!');
        }
    }

}
function displayResult(posts){
    postlistcontainer.innerHTML = posts.map((post)=>
        `<div class = "post-items">
        <h3>${post.title}</h3>
        <p>${post.body}</p></div>`
    ).join(' ');
}
//fetchusingXHR();


//===================================================
//fetchusingfetchmethod

function fetchusignFETCHmethod(){
    const fetchrequest = fetch('https://jsonplaceholder.typicode.com/posts',{method:'GET',
    });
    fetchrequest.
    then(response => response.json()).
    then(data => displayResult(data)).
    catch(error => console.log(error))
}


//fetchusignFETCHmethod();


//===================================================
//fetchusingasyncawait
async function fetchusingASYNCAWAIT(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{
        method:'GET',
    });
    const data = await response.json();
    displayResult(data);
    }
//fetchusingASYNCAWAIT();

//===================================================
//fetchusingallthreeofthem

function helper(method,url){
    const promise = new Promise((resolve,reject)=>{
        const xhr  =new  XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = ()=> {
            if(xhr.status === 200){
                resolve(xhr.response);
            }
            else{
                reject(xhr.response);
            }
            }
        });
        return promise;
    }
async function fetchusingall(){
    const response = await helper('GET','https://jsonplaceholder.typicode.com/posts');

    displayResult(response);

}
fetchusingall();