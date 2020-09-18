const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLanguages = users.filter((user) => user.languages.length > 2)
console.log(threeLanguages)

const email = users.map((user) => user.email)
console.log(email)

const years = users.reduce((total, current) => total + current.yearsOfExperience, 0)
console.log(years)

const longEmail = email.reduce((email1, email2) => {
    if( email1.length > email2.length) {
        return email1;
    }else{
        return email2;
    }
}, '');
console.log(longEmail)

const userString = users.reduce((string, user) =>
    string.concat(user.name + ', '), 'Your instructors are: ' )
console.log(userString)