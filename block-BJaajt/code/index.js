const img = document.querySelector("img");
const userName = document.querySelector("h3");
const company = document.querySelector("p");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const input = document.querySelector("input");




function displayUI(data){
    img.src = data.avatar_url;
    userName.innerText = data.name;
    company.innerText = data.company;
    followers.innerText = `Followers: ${data.followers}`;
    following.innerText = `Following: ${data.following}`;
}

function handlechange(event){

    if(event.keyCode === 13){
        let xhr = new XMLHttpRequest();
        xhr.open('GET',`https://api.github.com/users/${event.target.value}`)
        xhr.onload=function(){
            let userData = (JSON.parse(xhr.response));
            displayUI(userData);
        };
        xhr.onerror = function(){
            console.log('something Wrong!!!');
        };
        xhr.send();
        event.target.value="";
    }
}

input.addEventListener('keyup', handlechange)