let getLastCommit = (username) => {
    let url = 'https://api.github.com/users/' + username + '/events/public';
    return fetch(url, {headers:{'Authorization': `token ${GIT_TOKEN}`}})
        .then(response => response.json())
        .then(events => events.filter(event => event.type === 'PushEvent'))
        .then(pushEvents => pushEvents[0].created_at)
}

console.log(getLastCommit("roccopaccione"))



const wait = (ms) => {
    return  new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve('Hello World');
        }, ms);
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));