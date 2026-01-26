function send() {
  const error = document.querySelector(".error");
  const submitBtn = document.querySelector(".Submit");
  const sent = document.querySelector(".sent");

  // get all required inputs
  const inputs = document.querySelectorAll("input[required], textarea[required]");
  let allFilled = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      allFilled = false;
    }
  });

  if (!allFilled) {
    error.innerHTML = "❌ Please fill all fields";
    sent.style.display = "none";
    return;
  }

  const email = document.getElementById("email").value.trim();

  // email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    error.innerHTML = "❌ Please enter a valid email address";
    sent.style.display = "none";
    return;
  }

  // prepare mail
  const subject = encodeURIComponent("New Form Submission");
  let body = "";

  inputs.forEach(input => {
    body += `${input.name || "Field"}: ${input.value}\n`;
  });

  // open email client
  window.location.href = `mailto:mzawar505@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;

  // UI updates
  submitBtn.style.display = "none";
  error.innerHTML = "";
  sent.innerHTML = "Sent ✅";
  sent.style.display = "flex";
}
