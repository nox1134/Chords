
  function navigateToLoginPage() {
    window.location.href="./login.html"
}

document.addEventListener('DOMContentLoaded', function () {
    var animationContainer = document.getElementById('animation');

    animationContainer.addEventListener('click', navigateToLoginPage);
});
