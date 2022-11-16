

const userName = ['achyuth', 'gaearon' , 'prank7'];

const usernamePromise = Promise.all(
        userName.map((user)=>{
        console.log(user);
        return fetch(`https://api.github.com/users/${user}`).then((res) =>
        res.json()
        );
    })
    )
    .then((user) => {
        user.forEach((element) =>
        console.log(element.followers));
    });