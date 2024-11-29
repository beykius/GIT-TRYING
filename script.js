const body = document.querySelector('body');

fetch('https://api.escuelajs.co/api/v1/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            body.innerHTML += `
    <div class="profile"><img src="${user.avatar}" alt="${user.id}">
    <h2>${user.name}</h2>
    <p><span class="label">Email:</span> ${user.email}</p>
    <p><span class="label">Role:</span> ${user.role}</p>
    <p><span class="label">Account Created:</span> ${user.creationAt}</p>
    <p><span class="label">Last Updated:</span> ${user.updatedAt}</p>
    <button>Delete</button>
    </div>`
        })


        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.addEventListener('click', (e) => {
                const profile = e.target.closest('.profile');
                profile.remove();
            })
    })



})
