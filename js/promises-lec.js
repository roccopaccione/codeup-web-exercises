fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));