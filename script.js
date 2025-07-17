document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("submit_buttom");

  button.addEventListener("click", function () {
    const userInput = document.getElementById("message_content").value;
    alert(userInput);
  });
});