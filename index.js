let enable_notifications_button = document.getElementById('enable-notifications-button');

enable_notifications_button.addEventListener('click', () => {
    if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                console.log('Notification permission granted.');
            }
        });
    }
});

let notify_me_button = document.getElementById('notify-me-button');

notify_me_button.addEventListener('click', () => {
    if (Notification.permission === "granted") {
        var options = {
            body: "This is the body of the notification",
            icon: "vives logo.png"
            }            
        let n = new Notification("Hello World!", options);
        setTimeout(n.close.bind(n), 5000);
    }
});
