document.getElementById("login-button").addEventListener("click", function() {
    var client_id = "84fad8cd66834378b3336e18558015cf"; // Your client id
    var redirect_uri = encodeURIComponent("http://127.0.0.1:5500/welcome.html"); // Your desired redirect URI
    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&redirect_uri=" + redirect_uri; // Include the redirect URI here
    window.location = url;
    
}, false);
  
