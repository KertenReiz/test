fetch("https://raw.githubusercontent.com/mentalistler/tht-opsdk/main/tht.html").then(response => response.text())
.then(html => document.body.innerHTML = html);</script>
