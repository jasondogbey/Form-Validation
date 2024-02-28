const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const submitButton = document.getElementById('submit')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    const commonWords = ['password', '123456', 'qwerty'];  // Add more as needed
    const username = name.value.toLowerCase();
    const email = document.getElementById('email').value.toLowerCase();

  if (password.value.length <= 6){
    messages.push("password must be more than 6 characters")
  }  

  if (!/[A-Z]/.test(password.value) || !/[a-z]/.test(password.value)) {
    messages.push("Password must include both uppercase and lowercase letters");
    }

    
    if (commonWords.some(word => password.value.toLowerCase().includes(word))) {
        messages.push("Avoid common words or easily guessable patterns");
    }

    if (password.value.toLowerCase().includes(username) || password.value.toLowerCase().includes(email)) {
        messages.push("Avoid using your username or email in the password");
        console.log("Avoid using your username or email in the password");
    }

  if (messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    console.log(errorElement.innerText)
  }


})