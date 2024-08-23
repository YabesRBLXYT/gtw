document.getElementById('shortenForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const originalUrl = document.getElementById('originalUrl').value;

    // Simple hash-based shortening (For demo purposes only)
    const hash = btoa(originalUrl).substr(0, 8);
    const shortenedUrl = window.location.origin + '/monetized.html?url=' + encodeURIComponent(originalUrl);
    document.getElementById('shortenedUrl').innerHTML = `Shortened URL: <a href="${shortenedUrl}">${shortenedUrl}</a>`;
});

const token = 'uniqueTokenGeneratedOnServer';
document.getElementById('continueButton').addEventListener('click', function() {
    if (localStorage.getItem('userToken') === token) {
        // Replace the following with the actual URL you want to redirect to
        const urlParams = new URLSearchParams(window.location.search);
        window.location.href = urlParams.get('url');
    } else {
        alert('Verifikasi gagal. Coba lagi.');
    }
});

setTimeout(function() {
    document.getElementById('continueButton').disabled = false;
}, 5000);

// Simulate token setting after some action, like CAPTCHA or ad completion
localStorage.setItem('userToken', token);
                                                           
