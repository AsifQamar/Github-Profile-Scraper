const username = document.getElementById("username");
const button = document.getElementById("btn");
const info = document.getElementById("profile");

button.addEventListener("click", () => {
  const input = username.value;

  fetch(`https://api.github.com/users/${input}`)
    .then((res) => res.json())
    .then((data) => {
      info.innerHTML = `
        <p><img src="${data.avatar_url}" alt="${data.name}" style="width: 100px; border-radius: 50%;"></p>
        <p>Name: ${data.name}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Email: ${data.email}</p>
        <p>Profile ID: ${data.id}</p>
        <p>Location: ${data.location}</p>
      `;
    })
    .catch((err) => {
      console.log(err);
    });
});
