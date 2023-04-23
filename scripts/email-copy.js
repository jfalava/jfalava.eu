const emailCopyBtn = document.querySelector("#email-copy");
const emailSpan = document.querySelector("#email");

emailCopyBtn.addEventListener("click", function() {
  const emailText = emailSpan.textContent;
  navigator.clipboard.writeText(emailText).then(function() {
    console.log("Copied email: " + emailText);
  }, function() {
    console.error("Failed to copy email");
  });
});