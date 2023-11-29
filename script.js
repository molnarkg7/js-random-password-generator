const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const resetBtn = document.getElementById("reset-btn");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!'^+%&/()=?_#${[]}|;:>`<.*-@";

function generatePassword() {
  const passwordLength = parseInt(
    document.getElementById("password-stregth").value
  );

  const includeUppercase = document.getElementById("uppercase-letters").checked;
  const includeLowercase = document.getElementById("lowercase-letters").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  let characters = "";

  if (includeUppercase) characters += uppercaseLetters;
  if (includeLowercase) characters += lowercaseLetters;
  if (includeNumbers) characters += numbers;
  if (includeSymbols) characters += symbols;

  if (characters === "") {
    alert("Please select at least one option for the password.");
    return;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  displayPassword(password);
}

function displayPassword(password) {
  const passwordElement = document.querySelector(".password");
  passwordElement.textContent = password;
}

function copyPassword() {
  const passwordElement = document.querySelector(".password");
  const password = passwordElement.textContent;

  if (password === "") {
    alert("Generate a password first before copying.");
    return;
  }

  navigator.clipboard
    .writeText(password)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("Unable to copy to clipboard", err);
      alert("Error copying to clipboard");
    });
}

function reset() {
  window.location.reload();
}

generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
resetBtn.addEventListener("click", reset);
