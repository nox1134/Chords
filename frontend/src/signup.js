document.getElementById("login-button").addEventListener("click", function() {
    var client_id = "84fad8cd66834378b3336e18558015cf"; 
    var redirect_uri = encodeURIComponent("http://127.0.0.1:5500/frontend/src/welcome.html");
    var url = "https://accounts.spotify.com/authorize";
    url += "?response_type=token";
    url += "&client_id=" + encodeURIComponent(client_id);
    url += "&redirect_uri=" + redirect_uri;
    window.location = url;
    
}, false);
