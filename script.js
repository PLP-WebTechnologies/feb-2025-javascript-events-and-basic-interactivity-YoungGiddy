script.js

document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(You pressed: ${e.key});
});

document.getElementById("toggleTextBtn").addEventListener("click", () => {
  const text = document.getElementById("toggleText");
  text.style.display = text.style.display === "none" ? "block" : "none";
});

document.getElementById("sampleForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Invalid Email format.";
    feedback.style.color = "blue";
  } else if (password.length < 7) {
    feedback.textContent = "Password must be at least 7 characters.";
    feedback.style.color = "blue";
  } else {
    feedback.textContent = "Form has been submitted!";
    feedback.style.color = "green";
  }
});

  