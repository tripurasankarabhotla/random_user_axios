async function getUser() {
    const res = await axios.get("https://randomuser.me/api/");
    const user = res.data.results[0];

    document.getElementById("avatar").src = user.picture.large;

    document.getElementById("name").innerText =
        user.name.first + " " + user.name.last;

    document.getElementById("gender").innerText =
        user.gender.charAt(0).toUpperCase() + user.gender.slice(1);

    document.getElementById("email").innerText = user.email;

    document.getElementById("phone").innerText = user.phone;
}

window.onload = getUser;
