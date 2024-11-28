const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile = document.querySelector("#updateBtn");

const isWizard = confirm("Are you a wizard?");

if(isWizard === true){
    console.log("Welcome to Hogwarts!");
}
else {
    console.log("Access to Hogwarts denied!");
    profileImage.src = "images/image2.jpg";
    firstNameSpan.innerHTML = "Dudley Dursley";
    ageSpan.innerHTML = "12";
    statusSpan.innerHTML = "Muggle";
}

btnUpdateProfile.addEventListener("click", () => {
    console.log("clicked");
    profileImage.src = "images/image3.webp";
    firstNameSpan.innerHTML = "Severus Snape";
    ageSpan.innerHTML = "31";
    statusSpan.innerHTML = "Professor";
});