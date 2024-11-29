const body = document.querySelector('body');

fetch('https://api.escuelajs.co/api/v1/users')
    .then(response => response.json())
    .then(data => {
for (i = 0; i < data.length; i++) {
    body.innerHTML += `
    <div class="profile"><img src="${data[i].avatar}" alt="${data[i].id}">
    <h2>${data[i].name}</h2>
    <p><span class="label">Email:</span> ${data[i].email}</p>
    <p><span class="label">Role:</span> ${data[i].role}</p>
    <p><span class="label">Account Created:</span> ${data[i].creationAt}</p>
    <p><span class="label">Last Updated:</span> ${data[i].updatedAt}</p></div>`
}})
