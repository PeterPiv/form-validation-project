const form = document.querySelector("form");
const infoBox = document.querySelector(".infobox");
const inputFields = document.querySelectorAll("input");
const errorField = document.querySelector("#input__errors");

// the infoBox is where the current problems will be displayed
errorField.classList.add("hidden");

//the content of the errorArr will the content for the errorField

form.addEventListener("submit", (e) => {
  //this is where we push the errors
  const errorArr = [];
  errorArr.length = 0;

  const usernameValueTrimmed = inputFields[0].value.trim();
  const emailValueTrimmed = inputFields[1].value.trim();
  const passwordOneValue = inputFields[2].value.trim();
  const passwordTwoValue = inputFields[3].value.trim();
  const passwordHasSpaces =
    /\s/.test(passwordOneValue) || /\s/.test(passwordTwoValue);

  if (usernameValueTrimmed === "" || usernameValueTrimmed == null) {
    errorArr.push("Username is empty");
  }

  // checks to see if username contains only letters and numbers, and is between 4 and 20 characters
  if (!/^[a-zA-Z0-9]{4,20}$/.test(usernameValueTrimmed)) {
    errorArr.push(
      "Username must be between 4 and 20 characters and contain only letters and numbers"
    );
  }
  if (emailValueTrimmed === "" || emailValueTrimmed == null) {
    errorArr.push("Email address is missing");
  }
  if (!emailValueTrimmed.includes("@")) {
    errorArr.push("Email must include an @");
  }

  if (!passwordOneValue || !passwordTwoValue) {
    errorArr.push("Password is missing");
  }

  if (passwordOneValue !== passwordTwoValue) {
    errorArr.push("Passwords are not the same");
  }

  if (passwordHasSpaces) {
    errorArr.push("Password cannot have spaces");
  }

  if (errorArr.length > 0) {
    errorField.classList.remove("hidden");
    errorField.innerHTML = errorArr.join("<br>");
    console.log(errorArr);
    e.preventDefault();
  }
});

const togglePasswordImages = document.querySelectorAll(".show__password");
// document.querySelector("button").addEventListener("click", () => {
//   if (x.type === "password") {
//     x.type = "text";
//   } else {
//     x.type = "password";
//   }
// });

for (const toggleImage of togglePasswordImages) {
  toggleImage.addEventListener("click", () => {
    if (inputFields[2].type && inputFields[3].type === "password") {
      inputFields[2].type = "text";
      inputFields[3].type = "text";
    } else if (inputFields[2].type && inputFields[3].type === "text") {
      inputFields[2].type = "password";
      inputFields[3].type = "password";
    }
  });
}
