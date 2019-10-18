window.onload = function() {
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState !== 4) {
            console.log("Not ready, code: %o", httpRequest.readyState);
            return;
        }
        if (httpRequest.status !== 200) {
            console.log("Server error: %o", httpRequest.status);
            return;
        }
        var json = JSON.parse(httpRequest.responseText);
        console.log("json: %o", json);
        var wiki = json.query.pages["1"].revisions[0]["*"];
        console.log("wiki: %o", wiki);
        var html = InstaView.convert(wiki);
        console.log("html: %o", html);
        document.getElementById('area').innerHTML = html;
    };
    var url = "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Jimi_Hendrix&callback=?";
    httpRequest.open('GET', url, true);
    httpRequest.send(null);
}