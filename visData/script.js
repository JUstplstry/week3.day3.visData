const gender = document.getElementById("Gender")
gender.innerHTML = "Gender : "+data.results[0].gender

const name1 = document.getElementById("Name")
name1.innerHTML = "Name : "+data.results[0].name.first

const picture = document.getElementById("img")
picture.src = data.results[0].picture.large


const email = document.getElementById("Email")
email.innerHTML = "Email : "+data.results[0].email

